const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017"; // MongoDB connection URL
const database1 = "salonchatdboscarf28092024";
const JWT_SECRET =
  "your_jwt_secretc8a670214aad12c74b6bec703cced22a7c249c3d6df566ca2d1cb4194b493ec6";

async function connectDB() {
  await mongoose.connect(`${uri}/${database1}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
module.exports = {
  JWT_SECRET,
  connectDB,
  database1,
};
