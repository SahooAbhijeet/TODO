const TaskRepository = require('../repositories/task-repository');

const taskRepository = new TaskRepository();

async function createTask(data) {
  console.log("service", data)
  if (!data.title || data.title.trim() === '') {
    throw new Error('Title is required');
  }
  const response = await taskRepository.createTask(data);
  console.log( response);
}
  async function getAllTasks() {
    const response = await taskRepository.getAllTasks();
    return response;
  }



  async function updateTask(id, data) {
    const previousTask = await taskRepository.updateTask(id, {});
    if (previousTask.completed && 'completed' in data && data.completed)
      throw new Error('Cannot mark a completed task as complete again');

    const response = await taskRepository.updateTask(id, data);
    return response;
  }

  async function deleteTask(id) {
    const response = await taskRepository.deleteTask(id);
    return response;
  }


module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
}
