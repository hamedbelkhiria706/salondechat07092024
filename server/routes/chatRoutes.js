const express = require("express");
const {
  createChatRoom,
  getChatrooms,
} = require("../controllers/chatController");

const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.use(authMiddleware);

router.post("/", createChatRoom);

router.post("/", getChatrooms);
module.exports = router;
