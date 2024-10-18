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
const manageUsersSubscriptions = async (req, res) => {
  const { userId } = req.params;
  const { subscriptionPlan } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.subscriptionPlan = subscriptionPlan;
    user.isPaidUser = subscriptionPlan !== "free";
    await user.save();
  } catch (e) {}
};
