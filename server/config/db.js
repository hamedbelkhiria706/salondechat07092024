const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // MongoDB connection URL
const database1 = "salonchatdboscarf28092024";
const client = new MongoClient(uri);
const JWT_SECRET =
  "your_jwt_secretc8a670214aad12c74b6bec703cced22a7c249c3d6df566ca2d1cb4194b493ec6";
console.log(JWT_SECRET);
async function connectDB() {
  await client.connect();
}

module.exports = { JWT_SECRET, client, connectDB, database1 };
