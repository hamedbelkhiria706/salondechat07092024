const express = require("express");
const {
  createChatRoom,
  getChatrooms,
} = require("../controllers/chatController");

const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.use(authMiddleware);

router.post("/createchatroom", createChatRoom);

router.post("/getchatrooms", getChatrooms);
module.exports = router;
