const { JWT_SECRET, client, database1 } = require("../config/db"); // Use the correct path to your db.js file
const express = require("express");
const router = express.Router();
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Now you can use the imported 'client' and 'database1' in your routes
const { adminCollection } = require("../models/adminCollectionStructure");
// Login route
router.post("/login", async (req, res) => {
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
});

router.post("/banuser/:id", async (req, res) => {});

router.post("/validatepayment/:id", async (req, res) => {});

module.exports = router;
