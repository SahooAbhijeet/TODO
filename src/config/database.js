const mongoose = require("mongoose");

 const connection = async() => {
    await mongoose.connect("mongodb://localhost:27017/todo");
}

module.exports = {
    connection
}