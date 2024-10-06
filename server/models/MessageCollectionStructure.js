const { JWT_SECRET, client, database1 } = require("../config/mongoosedb"); // Use the correct path to your db.js file
const mongoose = require("mongoose");
// Message Schema

const messageSchema = new Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  chatRoomld: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChatRoom",
    required: true,
  },
  message: { type: String, required: true },

  timestamp: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", messageSchema);
module.exports = { Message };
