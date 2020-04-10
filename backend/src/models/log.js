const mongoose = require("../database/connection");

const LogSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  projectId: String,
  actionEnum: {
    type: Number,
    required: true,
  },
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
