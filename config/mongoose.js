const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/todo-app');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log("Connected with the MongoDB")
}); 