const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://lucassbarcelos:2229723a@cluster0-lynbb.gcp.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
