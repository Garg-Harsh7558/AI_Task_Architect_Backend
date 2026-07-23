import nodemailer from "nodemailer";

const sendEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}. It will expire in 1 hour.`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333; text-align: center;">Password Reset Request</h2>
          <p style="font-size: 16px; color: #555;">You have requested to reset your password. Use the following One-Time Password (OTP) to proceed. This OTP will expire in 1 hour.</p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; padding: 10px 20px; background-color: #f4f4f4; border-radius: 4px; color: #333; letter-spacing: 2px;">
              ${otp}
            </span>
          </div>
          <p style="font-size: 14px; color: #888;">If you did not request a password reset, please ignore this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Could not send OTP email.");
  }
};

export default sendEmail;
