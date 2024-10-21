const { JWT_SECRET, database1 } = require("../config/db"); // Use the correct path to your db.js file
const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  registerUser,
  loginUser,
  verifyEmail,
  getUserDashboard,
  users,
  getusers,
  usersid,
  deleteusers,
  oldlogin,
  oldsignup,
  profile,
} = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
// Now you can use the imported 'client' and 'database1' in your routes

// For example:
const { usersCollection } = require("../models/usersCollectionStructure");

const User = usersCollection;
// ... (Use the usersCollection in your signup and login routes)
const { roomsCollection } = require("../models/roomsCollectionStructure");

router.post("/register", registerUser);

router.get("/verify/:token", verifyEmail);

router.get("/login", loginUser);

router.get("/dashboard", authMiddleware, getUserDashboard);

//Creer

router.post("/users", users);
//Lire

router.get("/users", getusers);

//Mise a jour

router.put("/users/:id", usersid);

//Supprimer

router.delete("/users/:id", deleteusers);

// Login route
router.post("/oldlogin", oldlogin);

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  console.log(token);
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
// Sign up route
router.post("/oldsignup", oldsignup);

const { ObjectId } = require("mongodb");
// Update user profile route
router.put("/profile", authenticateToken, profile);
// Ajouter un utilisateur à une salle de discussion
router.post("/addUserToRoom", authenticateToken, async (req, res) => {
  const { roomId, userId } = req.body;
  try {
    // Check if the user is an admin of the room before adding a user
    const user = await usersCollection.findOne({ _id: ObjectId(userId) });
    if (user && user.adminRooms.includes(roomId)) {
      // User is an admin of the room, proceed with adding user logic
    } else {
      res
        .status(403)
        .json({ message: "Unauthorized to add user to this room" });
    }

    // Ajouter la logique pour vérifier les autorisations et l'ajout de l'utilisateur à la salle de discussion spécifiée

    const room = await roomsCollection.findOne({ _id: ObjectId(roomId) });
    if (room) {
      room.users.push(userId);
      await roomsCollection.updateOne(
        { _id: ObjectId(roomId) },
        { $set: { users: room.users } }
      );
      res.status(200).json({ message: "User added to room successfully" });
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding user to room", error: error.message });
  }
});
// Bloquer un utilisateur d'une salle de discussion
router.post("/blockUserInRoom", authenticateToken, async (req, res) => {
  const { roomId, userIdToBlock } = req.body;
  try {
    // Check if the user is an admin of the room before adding a user
    const user = await usersCollection.findOne({ _id: ObjectId(userId) });
    if (user && user.adminRooms.includes(roomId)) {
      // User is an admin of the room, proceed with adding user logic
    } else {
      res
        .status(403)
        .json({ message: "Unauthorized to add user to this room" });
    }

    // Ajouter la logique pour vérifier les autorisations et bloquer l'utilisateur de la salle de discussion spécifiée

    const room = await roomsCollection.findOne({ _id: ObjectId(roomId) });
    if (room) {
      const updatedUsers = room.users.filter((user) => user !== userIdToBlock);
      await roomsCollection.updateOne(
        { _id: ObjectId(roomId) },
        { $set: { users: updatedUsers } }
      );
      res.status(200).json({ message: "User blocked in room successfully" });
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error blocking user in room", error: error.message });
  }
});
// Créer une nouvelle salle de discussion avec des contrôles de limite
router.post("/createRoom", authenticateToken, async (req, res) => {
  const { roomId, userId } = req.body;
  try {
    // Ajouter la logique pour vérifier la limite et les autorisations avant la création de la salle de discussion
    const user = await usersCollection.findOne({ _id: ObjectId(userId) });
    if (user && user.createdRooms.length < MAX_ALLOWED_ROOMS) {
      // Logique de création de la salle de discussion
      res.status(200).json({ message: "Room created successfully" });
    } else {
      res.status(403).json({ message: "Not allowed to create more rooms" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating room", error: error.message });
  }
});
// Supprimer une salle de discussion
router.delete("/deleteRoom/:id", authenticateToken, async (req, res) => {
  try {
    const user = await usersCollection.findOne({ _id: ObjectId(userId) });
    if (user && user.adminRooms.includes(roomId)) {
      // User is an admin of the room, proceed with adding user logic
    } else {
      res
        .status(403)
        .json({ message: "Unauthorized to add user to this room" });
    }
    const roomId = req.params.id;
    // Ajouter la logique pour vérifier les autorisations et supprimer la salle de discussion spécifiée

    const result = await roomsCollection.deleteOne({
      _id: ObjectId(roomId),
      creator: ObjectId(userId),
    });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Room deleted successfully" });
    } else {
      res.status(403).json({ message: "Not allowed to delete this room" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting room", error: error.message });
  }
});

module.exports = router;
