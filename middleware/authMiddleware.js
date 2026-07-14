import jwt from "jsonwebtoken"
import User from "../src/model/User.js";

const authMiddleware=async(req,res,next)=>{
try {
  const token=req.cookies.token;
  if(!token){
    return res.status(401).json({message:"Unauthorized"})
  }
  const decodedToken=jwt.verify(token,process.env.jwt_key)
  const user=await User.findById(decodedToken.id).select("-password")
  if(!user){
    return res.status(401).json({message:"User not found"})
  }
  req.user=user
  next()
} catch (error) {
  return res.status(500).json({message:error.message})
}
}

export default authMiddleware;