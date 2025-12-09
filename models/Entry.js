const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Entry", entrySchema);