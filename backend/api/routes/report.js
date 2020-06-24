const express = require("express");

const router = express.Router();

const reportControllers = require("../controllers/report");

router.get("", reportControllers.getReport);

module.exports = router;
