const mongoose = require("mongoose");

const todo_schema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
  });

const Todo = mongoose.model('Todo', todo_schema);

module.exports = Todo;
 