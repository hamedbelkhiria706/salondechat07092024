const { JWT_SECRET, client, database1 } = require("../config/db"); // Use the correct path to your db.js file
const mongoose = require("mongoose");

// ChatRoom Schema
const chatRoomSchema = new Schema({
  name: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});
const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
module.exports = { ChatRoom };
