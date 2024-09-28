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

const usersRouter = require("./routes/users");

// Définir la route des utilisateurs en utilisant le router importé
app.use("/users", usersRouter);

// Connect to the database
async function connectDB() {
  await client.connect();
}

// Start the server
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
