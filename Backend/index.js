import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js"
import ConnectDB from "./lib/db.js"; 
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);

app.listen(process.env.PORT, () => {
  ConnectDB();
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
