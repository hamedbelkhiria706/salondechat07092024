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
  addUserToRoom,
  blockUserFromChat,
  createRoom,
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
router.post("/addUserToRoom", authenticateToken, addUserToRoom);
// Bloquer un utilisateur d'une salle de discussion
router.post("/blockUserInRoom", authenticateToken, blockUserFromChat);
// Créer une nouvelle salle de discussion avec des contrôles de limite
router.post("/createRoom", authenticateToken, createRoom);
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
