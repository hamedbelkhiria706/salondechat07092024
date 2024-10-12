const { JWT_SECRET, client, database1 } = require("../config/db"); // Ensure correct path to your db.js file
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    description: "must be a string and is required",
  },
  username: {
    type: String,
    required: true,
    description: "must be a string and is required",
  },
  password: {
    type: String,
    required: true,
    description: "must be a string and is required",
  },
  isVerified: {
    type: Boolean,
    required: true,
    description: "must be a boolean and is required",
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = {
  adminCollection: Admin,
};
