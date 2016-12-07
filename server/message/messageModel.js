var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create schema for model
var MessageSchema = new Schema ({
  text: String
});
// export model
module.exports = mongoose.model('Message', MessageSchema);
