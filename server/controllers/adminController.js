const User = require("../models/usersCollectionStructure");

//Get admin dashboard
const getAdminDashboard = (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
};
//Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
  } catch (e) {}
};
