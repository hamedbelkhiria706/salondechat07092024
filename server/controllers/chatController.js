const {ChatRoom} = require("../models/ChatRoomCollectionStructure");

//Create a new Chat Room
const createChatRoom = async (req, res) => {
  const { name } = req.body;
  try {
    const chatRoom = await ChatRoom.create({ name, users: [req.user._id] });
    res.status(201).json(chatRoom);
  } catch (error) {
    res.status(500).json({ message: "Error creating chatroom", error });
  }
};

 

const updateChatRoomCreator = async (chatRoomId, newCreatorId) => {
  try {
      // Validate ObjectId
      if (!mongoose.Types.ObjectId.isValid(chatRoomId)) {
          throw new Error("Invalid Chat Room ID.");
      }

      if (!mongoose.Types.ObjectId.isValid(newCreatorId)) {
          throw new Error("Invalid Creator ID.");
      }

      // Update the creator field of the chat room
      const updatedChatRoom = await ChatRoom.findByIdAndUpdate(
          chatRoomId,
          { creator: newCreatorId }, // Set the new creator
          { new: true, runValidators: true } // Options: return new document & run validators
      );

      if (!updatedChatRoom) {
          throw new Error("Chat Room not found.");
      }

      console.log("Chat room updated successfully:", updatedChatRoom);
      return updatedChatRoom; // Return the updated chat room
  } catch (error) {
      console.error("Error updating chat room creator:", error);
      throw error; // Propagate the error for further handling
  }
};

const updateChatRoomCreatorPut=async (req, res) => {
  const chatRoomId = req.params.id; // Get chat room ID from URL parameters
  const newCreatorId = req.body.creator; // Get new creator ID from request body

  try {
      const updatedChatRoom = await updateChatRoomCreator(chatRoomId, newCreatorId);
      res.status(200).json(updatedChatRoom);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

const createChatRoom1 = async (req, res) => {
  console.log('ok')
  const  name  = "req.body";
  try {
    const chatRoom = await ChatRoom.create({name: name});
    console.log(chatRoom)
    res.status(201).json(chatRoom);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating chatroom", error });
  }
 
};
 
const getChatrooms = async (req, res) => {
  try {
    const chatRoom=await ChatRoom.find({});
    console.log(chatRoom)
    res.status(201).json(chatRoom);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching chatrooms", error });
  }
};
const getChatroomsByUser = async (req, res) => {
  try {
     
    
    const userId = req.body._id;
    console.log(userId);
    const chatRoom=await ChatRoom.find({creator: userId}).select('name -_id');
    const namesArray = chatRoom.map(room => room.name);
     console.log(namesArray)
    res.status(201).send(namesArray);
  } catch (error) {
     
    res.status(201).json([]);
  }
};
const getChatroomsByUserMember = async (req, res) => {
  try {
    const userId = req.user._id;
    const chatRoom=await ChatRoom.find({ users: userId, creator: { $ne: userId } });
    res.status(201).json(chatRoom);
  } catch (error) {
    res.status(500).json({ message: "Error fetching chatrooms", error });
  }
};
module.exports = { createChatRoom,getChatroomsByUser,getChatroomsByUserMember, getChatrooms ,createChatRoom1,updateChatRoomCreatorPut};
