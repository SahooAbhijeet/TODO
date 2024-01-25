const CrudRepository = require("./crud-repository");
const Task = require("../models/Task");

class TaskRepository extends CrudRepository {
    
    constructor() {
        super(Task);
    }
}

module.exports = TaskRepository;