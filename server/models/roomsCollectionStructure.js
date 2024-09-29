const { JWT_SECRET, client, database1 } = require("../config/db"); // Use the correct path to your db.js file

const validationSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["name", "creator", "users", "createdAt"],
    properties: {
      _id: { bsonType: "objectId" },
      name: { bsonType: "string" },
      creator: { bsonType: "objectId" },
      users: {
        bsonType: "array",
        items: { bsonType: "objectId" },
      },
      createdAt: { bsonType: "date" },
    },
  },
};

let isValidationSetUp = false;

async function setupValidation() {
  if (!isValidationSetUp) {
    await client.db(database1).runCommand({
      collMod: "rooms",
      validator: validationSchema,
      validationAction: "error",
    });
    isValidationSetUp = true; // Mark validation as set up
  }
}

const roomsCollection = client.db(database1).collection("rooms");

// Call the setup function to ensure validation is applied
setupValidation().catch(console.error);

module.exports = {
  roomsCollection,
  setupValidation, // Export the setup function if needed elsewhere
};
