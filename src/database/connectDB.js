import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const result = await mongoose.connect(
      "mongodb+srv://nikhilw395:pass123@cluster0.oyncsqq.mongodb.net/testing"
    );
    console.log("database connected");
    console.log("HOST " + result.connection.host);
  } catch (error) {
    console.log("database connection error " + error.message);
    process.exit(1);
  }
};

export default connectDB;
