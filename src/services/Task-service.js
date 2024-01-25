const TaskRepository = require("../repositories");

class TaskService {
    constructor() {
        this.taskRepository = new TaskRepository();
    }
}

module.exports = TaskService;