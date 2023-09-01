const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cartRouter = require("./routes/SharedCart");
const app = express();

//middleware
app.use(express.json());

const uri = "mongodb+srv://test:test@cluster0.cwtexv6.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use("/api/cart", cartRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

module.exports = app;