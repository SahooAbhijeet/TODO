const express = require("express");
const taskController = require('../../controllers/task-controller');

const router = express.Router();

router.post("/task", taskController.createTask);

router.get("/tasks", taskController.getAllTasks)

router.patch("/task/:id", taskController.updateTask)

router.delete("/task/:id", taskController.deleteTask)


module.exports = router;