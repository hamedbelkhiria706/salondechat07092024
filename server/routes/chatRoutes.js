const express = require("express");
const {
  createChatRoom,
  getChatrooms,
  getChatroomsByUser,
  getChatroomsByUserMember,
  createChatRoom1,
  updateChatRoomCreatorPut
} = require("../controllers/chatController");

const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/tcreatechatroom", createChatRoom);
router.post("/tcreatechatroom1", createChatRoom1);
router.put("/tchatroom/:id/:creator", updateChatRoomCreatorPut);
router.post("/tgetchatrooms", getChatrooms);
router.post("/tgetchatroomsbyuser", getChatroomsByUser);
router.post("/tgetchatroomsbyusermember", getChatroomsByUserMember);
router.use(authMiddleware);

router.post("/createchatroom", createChatRoom);
router.post("/createchatroom1", createChatRoom1);
router.put("/chatroom/:id/:creator", updateChatRoomCreatorPut); 
router.post("/getchatrooms", getChatrooms);
module.exports = router;
