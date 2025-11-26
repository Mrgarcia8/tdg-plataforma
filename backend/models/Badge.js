const mongoose = require('mongoose');
const BadgeSchema = new mongoose.Schema({
  code: String,
  title: String,
  description: String,
  icon: String
});
module.exports = mongoose.model('Badge', BadgeSchema);

