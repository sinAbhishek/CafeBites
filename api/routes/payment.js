import express from "express";
import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const Stripe = stripe(process.env.Stripe);
const Url = process.env.ClientUrl;
router.post("/create-checkout-session", async (req, res) => {
  const data = req.body;

  const session = await Stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: data.name,
          },
          unit_amount: data.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${Url}/Success`,
    cancel_url: `${Url}/`,
  });

  res.json({ url: session.url });
});

export default router;
