const { JWT_SECRET, client, database1 } = require("../config/db"); // Use the correct path to your db.js file
const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Now you can use the imported 'client' and 'database1' in your routes
const { adminCollection } = require("../models/adminsCollectionStructure");

const {
  getAdminDashboard,
  getAllUsers,
  manageUserSubscription,
  login,
} = require("../controllers/adminController");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/adminMiddleware");

router.use(authMiddleware, adminMiddleware);
router.post("/dashboard", getAdminDashboard);

router.post("/users", getAllUsers);

router.put("/subscriptions/:userId", manageUserSubscription);

// Login route
router.post("/login", login);

router.post("/banuser/:id", async (req, res) => {});

router.post("/validatepayment/:id", async (req, res) => {});

module.exports = router;
