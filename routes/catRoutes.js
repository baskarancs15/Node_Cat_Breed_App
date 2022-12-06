const express = require("express");
const router = express.Router();
const { getTopBreeds } = require("../controllers/cat.controller");
router.get("/filter/topbreeds", getTopBreeds);

module.exports = router;
