var Message = require('./messageModel.js')

module.exports = {
  submitMessage: function(req, res, next) {
    var message = {
      text: req.body.text
    }
    return message;
  },
  getMessage: function(req, res, next) {

  }
}
