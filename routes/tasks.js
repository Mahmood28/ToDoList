const express = require("express");
const { taskList, taskCreate } = require("../controllers/taskControllers");
const { Task } = require("../db/models");

const router = express.Router();

router.get("/", taskList);

router.post("/", taskCreate);

module.exports = router;
