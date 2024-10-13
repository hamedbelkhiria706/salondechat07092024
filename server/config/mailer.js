const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransporter({
  service: "Gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.PASS_USER },
});
