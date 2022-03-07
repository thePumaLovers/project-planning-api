// import connection
const mongoose = require("./../db/connection");
const Schema = mongoose.Schema;

// subDocument  for projects
const projectSchema = new Schema({
  projectName: String,
  projectDescription: String,
  isCompleted: Boolean,
});

// schema
const groupSchema = new Schema({
  displayName: String,
  location: String,
  projects: [projectSchema],
});

// export model
module.exports = mongoose.model("Group", groupSchema);
