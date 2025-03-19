const transporter = require("../config/mailer");
const sendEmail = async ({ email, subject, message }) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      text: message,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
module.exports = sendEmail;
