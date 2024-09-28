const { MongoClient } = require("mongodb");

async function main() {
  // Connection URL
  const uri = "mongodb://localhost:27017"; // Change this if using MongoDB Atlas or remote server
  const database = "salonchatdboscarf28092024";
  const client = new MongoClient(uri + "/" + database);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Select database
    const database = client.db("car-rental-db");

    // Select collection
    const usersCollection = database.collection("users");

    // Insert a document
    const result = await usersCollection.insertOne({
      name: "Adam",
      email: "alice@example.com",
      password: "hashed_password",
    });

    console.log(`New user created with id: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);
