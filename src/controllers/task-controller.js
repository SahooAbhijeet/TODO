const TaskService = require("../services/task-service");
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');


async function createTask(req, res) {
  try {     

    const task = await TaskService.createTask({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category
    });
    SuccessResponse.data = task;
    return res
              .status(StatusCodes.CREATED)
              .json(SuccessResponse);
  } catch (error) {
    console.log(error)
    ErrorResponse.error = error;
    return res
            .status(400)
            .json(ErrorResponse);
  }
}


  async function getAllTasks(req, res) {
    try {
      const tasks = await TaskService.getAllTasks();
      SuccessResponse.data = tasks;
    return res
              .status(StatusCodes.OK)
              .json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res
            .status(400)
            .json(ErrorResponse);
    }
  }



  async function updateTask(req, res) {
    try {
      const updatedTask = await TaskService.updateTask(req.params.id, req.body);
      SuccessResponse.data = updatedTask;
    return res
              .status(StatusCodes.OK)
              .json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res
            .status(400)
            .json(ErrorResponse);
    }
  }

  async function deleteTask(req, res) {
    try {
      const response = await TaskService.deleteTask(req.params.id);
      SuccessResponse.data = deleteTask;
      return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
      } catch (error) {
        ErrorResponse.error = error;
        return res
              .status(400)
              .json(ErrorResponse);
      }
  }


module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
}
