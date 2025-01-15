const { JWT_SECRET, client, database1 } = require("../config/db"); // Use the correct path to your db.js file
const mongoose = require("mongoose");

// ChatRoom Schema
const chatRoomSchema = new mongoose.Schema({
   
   
  _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, required: true },
    users: [{ type: mongoose.Schema.Types.ObjectId }],
    createdAt: { type: Date, required: true },
});
const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
module.exports = { ChatRoom,roomsCollections:ChatRoom,chatRoomsCollection:ChatRoom };
