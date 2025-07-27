import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import ConnectDB from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.routes.js";
import cors from "cors";
dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.listen(process.env.PORT, () => {
  ConnectDB();
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
