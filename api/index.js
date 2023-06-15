import express from "express";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import ServerlessHttp from "serverless-http";
import CafeRoute from "./routes/Cafe.js";
import OrderRoute from "./routes/Order.js";
import AuthRoute from "./routes/auth.js";
import PaymentRoute from "./routes/payment.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MongoUrl);
  } catch (error) {
    throw error;
  }
};
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/Brew", CafeRoute);
app.use("/api/Order", OrderRoute);
app.use("/api/Auth", AuthRoute);
app.use("/api/Pay", PaymentRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(PORT, () => {
  mongoConnect();
  console.log("connected");
});
