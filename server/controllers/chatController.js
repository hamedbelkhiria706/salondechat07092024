const ChatRoom = require("../models/chatroom");

//Create a new Chat Room
const createChatRoom = async (req, res) => {
  const { name } = req.body;
  try {
    const chatRoom = await chatRoom.create({ name, users: [req.user._id] });
    res.status(201).json(chatRoom);
  } catch (error) {
    res.status(500).json({ message: "Error creating chatroom", error });
  }
};
const getChatrooms = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error fetching chatrooms", error });
  }
};

module.exports = { createChatRoom, getChatrooms };
