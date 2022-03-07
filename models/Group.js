//import connection
const mongoose = require("./../db/connection");
const Schema = mongoose.Schema;

//schema
const groupSchema = new Schema({
  displayName: String,
  location: String,
  projects: [
    {
      projectName: String,
      projectDescription: String,
      isCompleted: Boolean,
    },
  ],
});

//export model
module.exports = mongoose.model("Group", groupSchema);
