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
  deleteRoom,
  resetpassword
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

router.post("/login", loginUser);

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

router.post('/resetpassword',resetpassword);

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
router.delete("/deleteRoom/:id", authenticateToken, deleteRoom);

module.exports = router;
