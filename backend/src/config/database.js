const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_DB_URL;

exports.run = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    // Send a ping to confirm a successful connection
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
};
