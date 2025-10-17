// // const { connect } = require("mongoose");
// import { connect } from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// const db = async () => {
//   await connect(process.env.MONGO_DB);
//   console.log("Connect to server ");
// };

// export default db;



// db.js
import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
  try {
    await connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error; // ensures deployment knows connection failed
  }
};

export default db;
