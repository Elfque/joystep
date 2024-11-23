const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.mongoUrl, {});

    console.log("Database Connected");
  } catch {
    (err) => {
      console.log(err.message);
      process.exit(1);
    };
  }
};

module.exports = connectMongo;
