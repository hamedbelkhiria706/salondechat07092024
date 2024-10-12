const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const uri = "mongodb://localhost:27017"; // MongoDB connection URL
const database1 = "salonchatdboscarf28092024";
const client = new MongoClient(uri);

const usersRouter = require("./routes/usersRoutes");

var SHA256 = require("crypto-js");
// Définir la route des utilisateurs en utilisant le router importé
const adminRouter = require("./routes/adminRoutes");

// Définir la route des utilisateurs en utilisant le router importé

app.get("/test", (req, res, next) => {
  res.send(SHA256.AES.encrypt("my message", "secret key 123").toString());
});
app.use("/admin", adminRouter);
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
