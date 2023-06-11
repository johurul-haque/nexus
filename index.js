require('dotenv').config();

const express = require('express'),
  cors = require('cors'),
  { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'),
  app = express(),
  stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY);
port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    client.connect();

    const database = client.db('nexus'),
      classes = database.collection('classes'),
      instructors = database.collection('instructors'),
      users = database.collection('users');

    app.get('/', (req, res) => {
      res.send(`<main>
      <h1>Hi, I'm Johurul!</h1>
      <p>An aspiring front-end dev, creating high quality web apps.</p>
      <a href="https://www.linkedin.com/in/johurul-haque/">Linkedin</a>
      </main>`);
    });

    app.get('/classes', async (req, res) => {
      if (req.query?.limit) {
        const cursor = await classes
          .find({})
          .limit(parseInt(req.query.limit))
          .sort({ enrolledStudents: -1 })
          .toArray();
        res.send(cursor);
      } else {
        const cursor = await classes
          .find({})
          .sort({ enrolledStudents: -1 })
          .toArray();
        res.send(cursor);
      }
    });

    app.post('/classes', async (req, res) => {
      const classInfo = req.body,
        result = await classes.insertOne(classInfo);
      res.send(result);
    });

    app.get('/instructors', async (req, res) => {
      if (req.query?.limit) {
        const cursor = await instructors
          .find({})
          .sort({ name: 1 })
          .limit(parseInt(req.query.limit))
          .toArray();
        res.send(cursor);
      } else {
        const cursor = await instructors.find({}).sort({ name: 1 }).toArray();
        res.send(cursor);
      }
    });

    app.post('/instructors', async (req, res) => {
      const instructor = req.body,
        exists = await instructors.findOne({ email: instructor.email });

      if (exists) {
        res.send({ message: 'Instructor already exists' });
      } else {
        const result = await instructors.insertOne(instructor);
        res.send(result);
      }
    });

    app.post('/users', async (req, res) => {
      const user = req.body,
        exists = await users.findOne({ email: user.email });

      if (exists) {
        res.send({ message: 'User already exists' });
      } else {
        const result = await users.insertOne(user);
        res.send(result);
      }
    });

    // TODO: Complete integrating payment method

    app.post('/create-payment-intent', async (req, res) => {
      const { price } = req.body,
        amount = price * 100,
        paymentIntent = await stripe.paymentIntents.create({
          amount: amount,
          currency: 'usd',
          payment_method_types: ['card'],
        });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
