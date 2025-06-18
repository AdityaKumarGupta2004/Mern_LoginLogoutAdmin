import jwt from "jsonwebtoken";
import { User } from "../models/user-model.js";
export const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
// console.log(token,"tokken ")
  if (!token) {
    return res
      .status(401)
      .json({ message: "unauthorized HTTP, token not provided" });
  }
  const jwtToken = token.replace("Bearer", "").trim();


  try {
    const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
    console.log(isVerified);
    const userData = await User.findOne({email:isVerified.email}).select({password:0});
    req.user= userData;
    req.token= token;
    req.userID = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({message: " Unauthorized Invalid token"});
  }
};
