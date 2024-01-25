const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
        type: String, 
        required: [true, 'Title is required'],
        minlength: [1, 'Title should not be empty'] 
    },

  description: { 
        type: String,
        required: true
    },

  completed: { 
        type: Boolean, 
        default: false 
    },

  dueDate: { 
        type: Date,
    },

  category: { 
        type: String,
        required: true 
    },

});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
