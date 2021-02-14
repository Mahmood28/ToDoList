const express = require("express");
const { taskList } = require("../controllers/taskControllers");
const { Task } = require("../db/models");

const router = express.Router();

router.get("/", taskList);

module.exports = router;
