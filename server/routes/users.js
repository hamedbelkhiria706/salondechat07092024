const { JWT_SECRET, client, database1 } = require("../config/db"); // Use the correct path to your db.js file
const express = require("express");
const router = express.Router();

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
  console.log(token);
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
    console.log(name, email, password);
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

const { ObjectId } = require("mongodb");
// Update user profile route
router.put("/profile", authenticateToken, async (req, res) => {
  const { name, email, oldPassword, newPassword, userId } = req.body; // Assuming the request may include one or more of these fields

  try {
    const usersCollection = client.db(database1).collection("users");
    const user = await usersCollection.findOne({
      _id: ObjectId.createFromHexString(userId),
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If newPassword is provided, verify old password before updating
    if (newPassword) {
      if (oldPassword !== user.password) {
        return res.status(401).json({ message: "Invalid old password" });
      }
    }

    // Construct the update query based on the fields provided in the request
    let updateQuery = {};
    if (name) {
      updateQuery.name = name;
    }
    if (email) {
      updateQuery.email = email;
    }
    if (newPassword) {
      updateQuery.password = newPassword;
    }

    // Update the user's profile based on the provided fields
    const result = await usersCollection.findOneAndUpdate(
      { _id: ObjectId.createFromHexString(userId) },
      { $set: updateQuery },
      { returnOriginal: false }
    );

    if (result) {
      res.status(200).json({
        message: "User profile updated successfully",
        user: result,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user profile", error: error.message });
  }
});

module.exports = router;
