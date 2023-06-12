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
      <p>An aspiring front-end dev, creating high-quality web apps.</p>
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
        const cursor = await classes.find({}).sort({ name: 1 }).toArray();
        res.send(cursor);
      }
    });

    app.post('/classes', async (req, res) => {
      const classInfo = req.body,
        result = await classes.insertOne(classInfo);
      res.send(result);
    });

    app.patch('/classes', async (req, res) => {
      const { status, id } = req.body,
        filter = { _id: new ObjectId(id) },
        result = await classes.updateOne(
          filter,
          {
            $set: {
              status: status,
            },
          },
          { upsert: true }
        );
      res.send(result);
    });

    app.patch('/feedback', async (req, res) => {
      const { feedback, id } = req.body,
        filter = { _id: new ObjectId(id) },
        result = await classes.updateOne(
          filter,
          {
            $set: {
              feedback: feedback,
            },
          },
          { upsert: true }
        );
      res.send(result);
    });

    app.get('/instructor/class', async (req, res) => {
      const cursor = await classes
        .find({ instructorEmail: req.query.email })
        .toArray();
      res.send(cursor);
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

    app.get('/users', async (req, res) => {
      if (req.query?.email) {
        const user = await users.findOne({ email: req.query.email });
        res.send(user);
      } else {
        const user = await users.find({}).toArray();
        res.send(user);
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

    app.patch('/users', async (req, res) => {
      const { email, role } = req.body,
        filter = { email: email },
        result = await users.updateOne(
          filter,
          {
            $set: {
              role: role,
            },
          },
          { upsert: true }
        );
      res.send(result);
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
