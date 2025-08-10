const mongoose = require("mongoose");
const conn = async () => {
  try {
    await mongoose.connect("");
    console.log("Connected");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

conn();
