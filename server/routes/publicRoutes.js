const express = require("express");
const {
  getHomePage,
  getAboutPage,
} = require("../controllers/publicController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/about", getAboutPage);
