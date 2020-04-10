const mongoose = require("../database/connection");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quickDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
    maxlength: 255,
  },
  link: {
    type: String,
    required: true,
  },
  creator: {
    type: String, ///fk user Id
    required: true,
  },
  pair: [{ type: Array }],
  imgPath: [{ type: Array }],
  needPairs: Number,
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;
