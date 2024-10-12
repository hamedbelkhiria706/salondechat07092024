const { JWT_SECRET, database1 } = require("../config/db"); // Use the correct path to your db.js file
const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Now you can use the imported 'client' and 'database1' in your routes

// For example:
const { usersCollection } = require("../models/usersCollectionStructure");

const User = usersCollection;
// ... (Use the usersCollection in your signup and login routes)
const { roomsCollection } = require("../models/roomsCollectionStructure");

//Creer

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
//Lire

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Mise a jour

router.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Supprimer

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByldAndDelete(req.params.id);
    if (luser) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid password." });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in.", error });
  }
});

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
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Insert the new user
    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User created.", userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: "Error creating user.", error });
  }
});

const { ObjectId } = require("mongodb");
// Update user profile route
router.put("/profile", authenticateToken, async (req, res) => {
  const { name, email, oldPassword, newPassword, userId } = req.body; // Assuming the request may include one or more of these fields

  try {
    const usersCollection = client.db(database1).collection("users");
    const user = await usersCollection.findOne({
      _id: ObjectId.createFromHexString(userId),
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If newPassword is provided, verify old password before updating
    if (newPassword) {
      if (oldPassword !== user.password) {
        return res.status(401).json({ message: "Invalid old password" });
      }
    }

    // Construct the update query based on the fields provided in the request
    let updateQuery = {};
    if (name) {
      updateQuery.name = name;
    }
    if (email) {
      updateQuery.email = email;
    }
    if (newPassword) {
      updateQuery.password = newPassword;
    }

    // Update the user's profile based on the provided fields
    const result = await usersCollection.findOneAndUpdate(
      { _id: ObjectId.createFromHexString(userId) },
      { $set: updateQuery },
      { returnOriginal: false }
    );

    if (result) {
      res.status(200).json({
        message: "User profile updated successfully",
        user: result,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user profile", error: error.message });
  }
});
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
