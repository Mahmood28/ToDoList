const express = require("express");
const { fetchTask, taskList, taskCreate, taskDelete, taskUpdate } = require("../controllers/taskControllers");

const router = express.Router();

router.param("taskId", async (req, res, next, taskId) => {
    const foundTask = await fetchTask(taskId, next);
    if(foundTask) {
        req.task = foundTask;
        next();
    }else{
        next({
            status: 404, 
            message: "Task not found"
        });
    }
});

router.get("/", taskList);

router.post("/", taskCreate);

router.delete("/:taskId", taskDelete);

router.put("/:taskId", taskUpdate);


module.exports = router;