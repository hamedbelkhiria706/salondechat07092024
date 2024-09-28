const { client, database1 } = require("../config/db"); // Use the correct path to your db.js file
const router = express.Router();
const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Now you can use the imported 'client' and 'database1' in your routes

// For example:
const usersCollection = client.db(database1).collection("users");
// ... (Use the usersCollection in your signup and login routes)

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await usersCollection.findOne({ email });
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

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
// Sign up route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const usersCollection = client.db(database1).collection("users");

    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Insert the new user
    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User created.", userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: "Error creating user.", error });
  }
});
