const { JWT_SECRET, client, database1 } = require("../config/mongoosedb"); // Use the correct path to your db.js file
const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId }],
  createdAt: { type: Date, required: true },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = { Room };
