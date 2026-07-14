import User from "../model/User.js" 
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const register=async(req,res)=>{
 try {
   const{email,password,name}=req.body.userdetails;
   if(!email || !password || !name) {
    return res.status(400).json({message:"email, password and name are required"})
   } 
   const hashedPassword=await bcrypt.hash(password,10);
   const user=await User.create({
    email,
    password:hashedPassword,
    name
   })
   return res.status(201).json({message:"user created successfully"})
 } catch (error) {
  return res.status(500).json({message:error.message})
 }

}


const login=async(req,res)=>{
  try {
    const{email,password}=req.body.userdetails;
    if(!email || !password) {
      return res.status(400).json({message:"email and password is required"})
    }
    const user=await User.findOne({email})
    if(!user) {
      return res.status(400).json({message:"user not found"})
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid) {
      return res.status(400).json({message:"invalid password"})
    }
    const payload={id:user._id,email:email,name:name}
    const token=jwt.sign(payload,process.env.jwt_key)
    return res.status(200).json({message:"user logged in successfully"})
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}

export { register, login };


//forgot,verify,logout,updatepwd