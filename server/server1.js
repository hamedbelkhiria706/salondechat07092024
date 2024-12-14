const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db"); // Ensure this exists and is implemented
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../src/build")));

// Routes
const usersRouter = require("./routes/usersRoutes");
const chatRouter = require("./routes/chatRoutes");
const publicRouter = require("./routes/publicRoutes");
const adminRouter = require("./routes/adminRoutes");

app.use("/api/admin", adminRouter);
app.use("/api/users", usersRouter);
app.use("/api/chat", chatRouter);
app.use("/api/public", publicRouter);

// React Frontend Catch-All Route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/build", "index.html"));
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Start Server
app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`Server running on http://localhost:${port}`);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
});
