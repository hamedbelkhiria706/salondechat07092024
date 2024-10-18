const User = require("../models/usersCollectionStructure");

//Get admin dashboard
const getAdminDashboard = (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
};
//Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};
//Manage users subscriptions
const manageUsersSubscriptions = async (req, res) => {};
