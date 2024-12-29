const {adminCollection} = require("../models/adminsCollectionStructure");

//Get admin dashboard
const getAdminDashboard = (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
};
//Get all users
const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminCollection.find().select("-password");
    res.json(admins);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error fetching admins", error });
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
    res.json({ message: "Subscription updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating subscription", error });
  }
};

//Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await adminCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid password." });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in.", error });
  }
};
module.exports = {
  getAdminDashboard,
  getAllAdmins,
  manageUsersSubscriptions,
  login,
};
