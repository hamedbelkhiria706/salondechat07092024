//const User = require("../models/user");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
// Now you can use the imported 'client' and 'database1' in your routes

// For example:
const { usersCollection } = require("../models/usersCollectionStructure");

const User = usersCollection;
// ... (Use the usersCollection in your signup and login routes)
const { roomsCollection } = require("../models/roomsCollectionStructure");
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(408).json({ message: "User already exists" });
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const user = await User.create({
      username,
      email,
      password,
      verificationToken,
    });
    const verifyUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/users/verify/${verificationToken}`;

    const message = `Verify your email by clicking the Link: ${verifyUrl}`;
    await sendEmail({
      email: user.email,
      subject: "Email Verification",
      message,
    });
    res
      .status(201)
      .json({ message: "User registered. Verification email sent." });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.params;
  try {
    const user = await User.findOne({ verificationToken: token });
    if (!user)
      return res.status(400).json({ message: "Invalid or expired token " });
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200).json({ message: "Email verified successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error verifying email ", error });
  }
};
//User Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      if (!user.isverified)
        return res
          .status(401)
          .json({ message: "Please verify your email to login." });
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password. " });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Logging in", error });
  }
};
//Get User Dashboard
const getUserDashboard = (req, res) => {
  res.json({ message: "Welcome to your dashboard, ${req.user.username}!" });
};

const users = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const usersid = async (req, res) => {
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
};
const deleteusers = async (req, res) => {
  try {
    const user = await User.findByldAndDelete(req.params.id);
    if (luser) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const oldlogin = async (req, res) => {
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
};
const oldsignup = async (req, res) => {
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
};
const profile = async (req, res) => {
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
};
const addUserToRoom = async (req, res) => {
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
};
module.exports = {
  registerUser,
  verifyEmail,
  loginUser,
  getUserDashboard,
  users,
  getusers,
  usersid,
  deleteusers,
  oldlogin,
  oldsignup,
  profile,
  addUserToRoom,
};
