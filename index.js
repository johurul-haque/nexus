require('dotenv').config();

const express = require('express'),
  cors = require('cors'),
  { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'),
  app = express(),
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

    app.get('/', (req, res) => {
      res.send(`<main>
      <h1>Hi, I'm Johurul!</h1>
      <p>An aspiring front-end dev, creating high quality web apps.</p>
      <a href="https://www.linkedin.com/in/johurul-haque/">Linkedin</a>
      </main>`);
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
