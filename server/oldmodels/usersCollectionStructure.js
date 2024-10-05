const { JWT_SECRET, client, database1 } = require("../config/db"); // Ensure correct path to your db.js file
const { ObjectId } = require("mongodb");
const Joi = require("joi");
const validationSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: [
      "email",
      "username",
      "password",
      "isVerified",
      "maxRooms",
      "adminRooms",
    ],
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
        validationAction: "error", // Specifies what to do if the validation fails
        validate: {
          validator: function (v) {
            return (
              Joi.string().alphanum().min(3).max(30).required().validate(v)
                .error === undefined
            );
          },
          message:
            "Username must be a string with alphanumeric characters, minimum length 3, and maximum length 30",
        },
      },
      password: {
        bsonType: "string",
        description: "must be a string and is required",
        validationAction: "error", // Specifies what to do if the validation fails
        validate: {
          validator: function (v) {
            return (
              Joi.string()
                .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
                .validate(v).error === undefined
            );
          },
          message:
            "Username must be a string with alphanumeric characters, minimum length 3, and maximum length 30",
        },
      },
      isVerified: {
        bsonType: "bool",
        description: "must be a boolean and is required",
      },
      maxRooms: {
        bsonType: "int",
        description: "must be an integer and is required",
      },
      adminRooms: {
        bsonType: "array",
        items: {
          bsonType: "objectId",
        },
        description: "must be an array of ObjectIds and is required",
      },
      plan: {
        type: "object",
        properties: {
          type: { type: "string" },
          date_debut: { type: "string", format: "date-time" },
          date_fin: { type: "string", format: "date-time" },
        },
        required: ["type", "date_debut", "date_fin"],
      },
    },
  },
};

let isValidationSetUp = false;

async function setupValidation() {
  const collStats = await client.db(database1).collection("users").stats();
  if (!isValidationSetUp && !collStats.validator) {
    await client.db(database1).runCommand({
      collMod: "users",
      validator: validationSchema,
      validationAction: "error",
    });
    isValidationSetUp = true; // Mark validation as set up
  }
}

const usersCollection = client.db(database1).collection("users");

// Call the setup function to ensure validation is applied
setupValidation().catch(console.error);

module.exports = {
  usersCollection,
  setupValidation, // Export the setup function if needed elsewhere
};
