const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { ObjectId } = require("mongodb");
const sendEmail = require("../utils/sendEmail");
const generateToken = require("../utils/generateToken");
const { usersCollection } = require("../models/usersCollectionStructure");
const { roomsCollections } = require("../models/roomsCollectionStructure");
 
const MAX_ALLOWED_ROOMS = 3; // Example limit for free users
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// User Registration
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log('register called')
  try {
    // Check if user exists
    const userExists = await usersCollection.find({ email:email });
    console.log(userExists)
    if (userExists.length > 0)
      return res.status(409).json({ message: "User already exists" });

    // Create verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

     const hashedPassword=password;
    // Save user
    const newUser = { username: email,
       // Ensure 'email' is defined before this line 
       email: email,
       //  // Explicitly set 'email' to avoid any confusion 
       password: hashedPassword, 
       verifcationToken:verificationToken,
        isVerified: false, 
        createdRooms: [],
         adminRooms: [], };
     
    const user = await usersCollection.create(newUser);
    // Send verification email
    /*const verifyUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/users/verify/${verificationToken}`;
    const message = `Verify your email by clicking the link: ${verifyUrl}`;

    await sendEmail({
      email: email,
      subject: "Email Verification",
      message,
    });*/
    console.log(user)
    res.status(201).json({
      message: "User registered successfully. Verification email sent.",
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error registering user", error: error.message });
  }
};

// Email Verification
const verifyEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const user = await usersCollection.findOne({ verificationToken: token });
    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    // Update user verification status
    await usersCollection.updateOne(
      { _id: user._id },
      { $set: { isVerified: true, verificationToken: null } }
    );

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error verifying email", error: error.message });
  }
};

// User Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('login called')
  try {
    const user = await usersCollection.findOne({ email:email });
    console.log(user)
    if (!user) return res.status(400).json({ message: "User not found" });
    console.log('passed 1')
    // Verify password
    const isMatch = await user.matchPassword(password)
    console.log(isMatch)
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });
    console.log('passed 2')
    if (!user.isVerified)
      console.log('Please verify your email to login')
      //return res
      //  .status(200)
      //  .json({ message: "Please verify your email to login" });
    console.log('passed 3')
    // Generate JWT token
     
    const token = generateToken(user._id);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      verificationToken:token,
    });
  } catch (error) {
    res.status(200).json({ message: "Error logging in", error: error.message });
  }
};

// Create a Room
const createRoom = async (req, res) => {
  const { userId, roomName } = req.body;

  try {
    const user = await usersCollection.findOne({ _id: ObjectId(userId) });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check room creation limit for free users
    if (user.createdRooms.length >= MAX_ALLOWED_ROOMS) {
      return res
        .status(403)
        .json({ message: "Room creation limit reached. Upgrade your plan." });
    }

    // Create a new room
    const newRoom = {
      name: roomName,
      creator: ObjectId(userId),
      users: [userId],
    };
    const result = await roomsCollections.insertOne(newRoom);

    // Update user's created rooms
    await usersCollection.updateOne(
      { _id: ObjectId(userId) },
      { $push: { createdRooms: result.insertedId } }
    );

    res.status(201).json({ message: "Room created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating room", error: error.message });
  }
};

// Add User to Room
const addUserToRoom = async (req, res) => {
  const { roomId, userId } = req.body;

  try {
    const room = await roomsCollections.findOne({ _id: ObjectId(roomId) });
    if (!room) return res.status(404).json({ message: "Room not found" });

    // Add user to room
    await roomsCollections.updateOne(
      { _id: ObjectId(roomId) },
      { $addToSet: { users: userId } }
    );

    res.status(200).json({ message: "User added to room successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding user to room", error: error.message });
  }
};

// Block User from Room
const blockUserFromRoom = async (req, res) => {
  const { roomId, userIdToBlock } = req.body;

  try {
    const room = await roomsCollections.findOne({ _id: ObjectId(roomId) });
    if (!room) return res.status(404).json({ message: "Room not found" });

    // Remove user from room
    await roomsCollections.updateOne(
      { _id: ObjectId(roomId) },
      { $pull: { users: userIdToBlock } }
    );

    res.status(200).json({ message: "User blocked from room successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error blocking user from room", error: error.message });
  }
};

// Delete Room
const deleteRoom = async (req, res) => {
  const { roomId, userId } = req.body;

  try {
    const room = await roomsCollections.findOne({ _id: ObjectId(roomId) });
    if (!room) return res.status(404).json({ message: "Room not found" });

    if (String(room.creator) !== String(userId))
      return res.status(403).json({ message: "Unauthorized to delete room" });

    // Delete room
    await roomsCollections.deleteOne({ _id: ObjectId(roomId) });

    // Remove room from user's createdRooms
    await usersCollection.updateOne(
      { _id: ObjectId(userId) },
      { $pull: { createdRooms: ObjectId(roomId) } }
    );

    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting room", error: error.message });
  }
};
const getUserDashboard=async(req,res)=>{
 const user=await usersCollection.find({})

 res.send(user)

}

const users=async(req,res)=>{
  const user=await usersCollection.find({})

  res.send(user)
}
const getusers=async(req,res)=>{
  const user=await usersCollection.find({})

 res.send(user)
}

const usersid=async(req,res)=>{
  const user=await usersCollection.find({_id:req.params.id})
  res.send(user)
}
const deleteusers=async(req,res)=>{
  const result=await usersCollection.findByIdAndDelete(req.params.id)
  res.send(result)
}
const oldlogin=async(req,res)=>{
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    if (!user.isVerified)
      return res
        .status(403)
        .json({ message: "Please verify your email to login" });

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
}
const oldsignup=async(req,res)=>{
  const { username, email, password } = req.body;

  try {
    // Check if user exists
    const userExists = await usersCollection.findOne({ email });
    if (userExists)
      return res.status(409).json({ message: "User already exists" });

    // Create verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = {
      username,
      email,
      password: hashedPassword,
      verificationToken,
      isVerified: false,
      createdRooms: [],
      adminRooms: [],
    };
    await usersCollection.insertOne(newUser);

    // Send verification email
    const verifyUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/users/verify/${verificationToken}`;
    const message = `Verify your email by clicking the link: ${verifyUrl}`;

    await sendEmail({
      email: email,
      subject: "Email Verification",
      message,
    });

    res.status(201).json({
      message: "User registered successfully. Verification email sent.",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
}
const profile=async(req,res)=>{
  const user=await usersCollection.find({_id:req.params.id})
  res.send(user)
}
const blockUserFromChat = async (req, res) => {
  const { roomId, userId } = req.body;

  try {
    const room = await roomsCollections.findOne({ _id: ObjectId(roomId) });

    if (!room) return res.status(404).json({ message: "Room not found" });

    // Supprimer l'utilisateur de la salle
    await roomsCollections.updateOne(
      { _id: ObjectId(roomId) },
      { $pull: { users: userId } } // Utilisation de $pull pour retirer l'utilisateur
    );

    res.status(200).json({ message: "User banned from room successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error banning user from room", error: error.message });
  }
}

module.exports = {
  registerUser,
  verifyEmail,
  loginUser,
  createRoom,
  addUserToRoom,
  blockUserFromRoom,
  deleteRoom,
  getUserDashboard,
  users,
  getusers,
  usersid,
  deleteusers,
  oldlogin,
  oldsignup,
  profile, 
  blockUserFromChat, 
};
