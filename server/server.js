const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");
const dotenv = require("dotenv");
const SHA256 = require("crypto-js/sha256"); // Correctly import SHA256
const AES = require("crypto-js/aes"); // Add AES for encryption

// Initialize app and configurations
dotenv.config();
const app = express();
const port = process.env.PORT || 3000; // Use .env file for port configuration if available
const uri = process.env.MONGO_URI || "mongodb://localhost:27017"; // Use .env file for MongoDB URI if available
const databaseName = process.env.DB_NAME || "salonchatdboscarf28092024";

// MongoDB Client
const client = new MongoClient(uri);

// Import routes
const usersRouter = require("./routes/usersRoutes");
const chatRouter = require("./routes/chatRoutes");
const publicRouter = require("./routes/publicRoutes");
const adminRouter = require("./routes/adminRoutes");

// Import middleware
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../src/public")));

// Route definitions
app.use("/api/admin", adminRouter);
app.use("/api/users", usersRouter);
app.use("/api/chat", chatRouter);
app.use("/api/public", publicRouter);

// Example route with SHA256 and AES encryption
app.get("/test", (req, res) => {
  const message = "my message";
  const secretKey = "secret key 123";
  const encryptedMessage = AES.encrypt(message, secretKey).toString();
  res.send({ originalMessage: message, encryptedMessage });
});

// Serve static files for public directory
app.get("/public/:page1/:page", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/public/", req.params.page1, req.params.page)
  );
});

app.get("/public/:page", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/", req.params.page));
});

// Serve static files for admin directory
app.get("/admin/:page1/:page", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../admin/", req.params.page1, req.params.page)
  );
});

app.get("/admin/:page", (req, res) => {
  res.sendFile(path.join(__dirname, "../admin/", req.params.page));
});

// Middleware for handling errors
app.use(notFound);
app.use(errorHandler);

// Catch-all route for React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/build", "index.html"));
});

// Connect to the database
async function connectDB() {
  try {
    await client.connect();
    console.log(`Connected to MongoDB: ${uri}`);
    const db = client.db(databaseName);
    app.locals.db = db; // Store database reference in app locals for reuse
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the application if DB connection fails
  }
}

// Start the server
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
