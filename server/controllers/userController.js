const User = require("../models/user");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const registerUser = async (reg, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(408).json({ message: "User already exists" });
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const user = await User.create({
      username,
      email,
      password,
      verificationToken,
    });
    const verifyUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/users/verify/$(verificationToken}`;

    const message = `Verify your email by clicking the Link: ${verifyUrl}`;
    await sendEmail({
      email: user.email,
      subject: "Email Verification",
      message,
    });
    res
      .status(201)
      .json({ message: "User registered. Verification email sent." });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};
const verifyEmail = async (req, res) => {
  const { token } = req.params;
  try {
    const user = await User.findOne({ verificationToken: token });
    if (!user)
      return res.status(400).json({ message: "Invalid or expired token " });
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200).json({ message: "Email verified successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error verifying email ", error });
  }
};
//User Login
const loginUser = async (reg, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      if (!user.isverified)
        return res
          .status(401)
          .json({ message: "Please verify your email to login." });
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password. " });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Logging in", error });
  }
};
//Get User Dashboard
const getUserDashboard = (req, res) => {
  res.json({ message: "Welcome to your dashboard, ${req.user.username}!" });
};
module.exports = { registerUser, verifyEmail, loginUser, getUserDashboard };
