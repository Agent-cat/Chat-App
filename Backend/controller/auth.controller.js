import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
export const Signup = async (req, res) => {
  const { email, fullname, password, profilepic } = req.body;
  if (!email || !password || !fullname) {
    return res.json({
      sucess: false,
      message: "please provide all the required inputs",
    });
  }
  try {
    const user = await User.findOne({ email });

    if (user)
      return res.json({ status: false, message: "user allready exist" });

    const salt = await bcrypt.genSalt(6);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newuser = new User({
      email,
      fullname,
      password: hashedpassword,
      profilepic,
    });

    if (newuser) {
      generateToken(newuser._id, res);
      await newuser.save();
      res.status(200).json({
        _id: newuser._id,
        fullname: newuser.fullname,
        email: newuser.email,
        profilepic: newuser.profilepic,
      });
    } else {
      res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(404).json({ message: "Internal server error" });
  }
};
export const Login = async (req, res) => {
  const { email, password } = req.body();
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields " });
  }
  try {
    const userdata = await User.findOne({ email });
    if (!userdata) return res.json({ message: "Invalid credentials" });
    const ispasswordcorrect = bcrypt.compare(password, userdata.password);
    if (!ispasswordcorrect) return res.json({ message: "invalid credentials" });
    generateToken(userdata._id, res);

    res.json({
      _id: userdata._id,
      fullname: userdata.fullname,
      email: userdata.email,
      profilepic: userdata.profilepic,
    });
  } catch (error) {
    res.json({ message: "Internal server error" });
  }
};
export const Logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
  } catch (error) {
    console.log(`Error in logout controller ${error.message}`);
    res.status(404).json({ message: "Internal server error" });
  }
};
