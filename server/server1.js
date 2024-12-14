const express = require("express");
 
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000; // Use .env file for port configuration if available
const uri = process.env.MONGO_URI || "mongodb://localhost:27017"; // Use .env file for MongoDB URI if available
const databaseName = process.env.DB_NAME || "salonchatdboscarf28092024";
const {JWT_SECRET,
    connectDB,
    database1}=require('./config/db.js')

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../src/public")));
// Import routes

const usersRouter = require("./routes/usersRoutes");


const chatRouter = require("./routes/chatRoutes");
const publicRouter = require("./routes/publicRoutes");
const adminRouter = require("./routes/adminRoutes");
 
 //const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../src/public")));

app.use("/api/admin", adminRouter);
app.use("/api/users", usersRouter);
app.use("/api/chat", chatRouter);
app.use("/api/public", publicRouter);
// Route definitions
 

// Catch-all route for React frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/build", "index.html"));
  })
app.listen(port, async () => {
    await connectDB();
    console.log(`Server is running on http://localhost:${port}`);
  });