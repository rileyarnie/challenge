const express = require("express");

const router = express.Router();

const trackerControllers = require("../controllers/tracker");

router.post("/start", trackerControllers.startTrackers);
router.post("/stop", trackerControllers.stopTrackers);
router.post("/log", trackerControllers.logTrackers);

module.exports = router;

