const { JWT_SECRET, client, database1 } = require("../config/db"); // Ensure correct path to your db.js file
const { ObjectId } = require("mongodb");

const validationSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["email", "username", "password", "isVerified"],
    properties: {
      _id: {
        bsonType: "objectId",
      },
      email: {
        bsonType: "string",
        description: "must be a string and is required",
      },
      username: {
        bsonType: "string",
        description: "must be a string and is required",
      },
      password: {
        bsonType: "string",
        description: "must be a string and is required",
      },
      isVerified: {
        bsonType: "bool",
        description: "must be a boolean and is required",
      },
    },
  },
};

let isValidationSetUp = false;

async function setupValidation() {
  if (!isValidationSetUp) {
    await client.db(database1).runCommand({
      collMod: "admins",
      validator: validationSchema,
      validationAction: "error",
    });
    isValidationSetUp = true; // Mark validation as set up
  }
}

const usersCollection = client.db(database1).collection("admins");

// Call the setup function to ensure validation is applied
setupValidation().catch(console.error);

module.exports = {
  usersCollection,
  setupValidation, // Export the setup function if needed elsewhere
};
