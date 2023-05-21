import express from "express";
import { createOrder } from "../controller/Order.js";

const router=express.Router();

router.post("/",createOrder);
export default router