const { JWT_SECRET, client, database1 } = require("../config/db"); // Use the correct path to your db.js file
const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Now you can use the imported 'client' and 'database1' in your routes
 

const {
  testUser,
  getAdminDashboard,
  getAllAdmins,
  manageUsersSubscriptions, // Corrected name here
  login,
} = require("../controllers/adminController");


router.post('/currentusers',testUser);
router.post("/dashboard", getAdminDashboard);

router.post("/admins", getAllAdmins);

router.put("/subscriptions/:userId", manageUsersSubscriptions);

// Login route
router.post("/login", login);

router.post("/banuser/:id", async (req, res) => {});

router.post("/validatepayment/:id", async (req, res) => {});

module.exports = router;
