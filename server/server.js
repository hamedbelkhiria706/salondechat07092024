const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

const uri = "mongodb://localhost:27017"; // MongoDB connection URL
const database1 = "salonchatdboscarf28092024";
const client = new MongoClient(uri);

// Change this to a secure secret
//const crypto = require("crypto");

//const secret = crypto.randomBytes(32).toString("hex");
//console.log(secret);

const JWT_SECRET =
  "your_jwt_secretc8a670214aad12c74b6bec703cced22a7c249c3d6df566ca2d1cb4194b493ec6";
console.log(JWT_SECRET);
// Connect to the database
async function connectDB() {
  await client.connect();
}

// Sign up route
app.post("/signup", async (req, res) => {
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

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usersCollection = client.db(database1).collection("users");

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

// Start the server
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
