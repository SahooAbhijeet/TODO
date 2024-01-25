const Task = require('../models/Task');
class TaskRepository {
  
  async createTask(data) {
    console.log("repo", data)
    const response = await Task.create(data);
    console.log( response);
  }

  async getTask() {
    const response = await this.model.find({});
    return response;
  }

  async updateTask(id, data) {
    const response = await this.model.findByIdAndUpdate(id, data, { new: true });
    return response;
  }

  async deleteTask(id) {
    const response = await this.model.findByIdAndDelete(id);
    return response;
  }
}

module.exports =  TaskRepository;












