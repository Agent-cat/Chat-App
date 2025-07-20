import mongoose  from "mongoose";

const ConnectDB = async () => {
  try {
   const conn= await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected : ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};
export default ConnectDB
