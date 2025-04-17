// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // THIS IS IMPORTANT and should be called before accessing process.env

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log('mongodb connected successfully');
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default connectDB;

import dotenv from "dotenv";
import mongoose from "mongoose";
// const mongoose = require('mongoose');

dotenv.config(); // THIS IS IMPORTANT and should be called before accessing process.env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
