import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { createError } from "../util/error.js";

export const Register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newuser = new User({
      ...req.body,
      password: hash,
    });
    const saveduser = await newuser.save();
    res.status(200).json(saveduser);
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "user not found"));
    const passwordcorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordcorrect)
      return next(createError(400, "password is not correct"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SecretKey
    );
    const { password, isAdmin, ...other } = user._doc;
    res
      .cookie("acess_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...other }, isAdmin });
  } catch (err) {
    next(err);
  }
};
