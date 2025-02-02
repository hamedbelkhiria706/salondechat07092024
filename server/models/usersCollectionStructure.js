const { JWT_SECRET, client, database1 } = require("../config/db"); // Ensure correct path to your db.js file
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
// Mise à jour du modèle User avec les informations d'abonnement
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },

  createdAt: { type: Date, default: Date.now },
  subscriptionPlan: {
    type: mongoose.Schema.Types.ObjectId,
  },
  maxChatRooms: { type: Number, default: 3 }, // 3 pour les utilisateurs gratuits
  createdChatRooms: { type: Number, default: 0 },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

// Collection des abonnements
const subscriptionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  planName: ["free", "premium", "pro"],
  maxChatRooms: { type: Number, required: true },
  price: { type: Number, required: true },
});
//Encrypt password before saving
 
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
}); 

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("User", userSchema);
const Subscription = mongoose.model("Subscription", subscriptionSchema);
module.exports = {
  usersCollection: User,
  Subscription,
};
