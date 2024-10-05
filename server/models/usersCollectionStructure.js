const { JWT_SECRET, client, database1 } = require("../config/db"); // Ensure correct path to your db.js file
const { ObjectId } = require("mongodb");

// Mise à jour du modèle User avec les informations d'abonnement
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  subscriptionPlan: {
    type: String,
    enum: ["free", "premium", "pro"],
    default: "free",
  },
  maxChatRooms: { type: Number, default: 3 }, // 3 pour les utilisateurs gratuits
  createdChatRooms: { type: Number, default: 0 },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

// Collection des abonnements
const subscriptionSchema = new Schema({
  planName: { type: String, required: true },
  maxChatRooms: { type: Number, required: true },
  price: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);
const Subscription = mongoose.model("Subscription", subscriptionSchema);
