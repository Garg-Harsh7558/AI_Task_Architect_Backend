import mongoose from "mongoose";

const OtpSchema =new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600 // The document will be automatically deleted after 1 hour
  }
});

const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;
