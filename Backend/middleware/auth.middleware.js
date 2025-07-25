import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const cookie = req.cookies.jwt;
    if (!cookie)
      return res.json({ message: "Unauthorized - No token Provided " });
    const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
    console.log(decoded);
    if (!decoded) return res.json({ message: "Invalid token" });
    const user = await User.findById(decoded.userId);
    req.user = user;
    next();
  } catch (error) {
    console.log(`Error in auth middleware ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
