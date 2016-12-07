'use strict';
// update requirements
var express = require('express');
var path = require('path');
var app = express();
// middleware
var bodyParser = require('body-parser');
// initialize ORM
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// import message model
var Message = require('./server/message/messageModel.js');

// require('./server/config/middleware.js');

// consigure bodyParser to get data from POST
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 1337;

// create router
var router = express.Router();

// register routes to api
app.use('/api', router);

// middleware to log the reqs
router.use(function(req, res, next) {
  console.log('A request has been processed.');
  next();
});

// test route
router.get('/', function(req, res) {
  res.json({ message: 'Oh heyyy!'});
});

router.route('/messages')
  .post(function(req, res) {
    var message = new Message();
    console.log(req.body.text);
    message.text = req.body.text;
    message.save(function(err) {
      if(err) {
      res.send(err);
      }
      res.json({ message: 'Thanks for spreading the love!'});
    });
  })
  .get(function(req, res) {
    Message.find(function(err, messages) {
      if(err) {
        res.send(err);
      }
      res.json(messages);
    })
  });

  router.route('/messages/:message_id')
    .get(function(req, res) {
      Message.findById(req.params.message_id, function(err, message) {
        if(err) {
          res.send(err);
        }
        res.json(message);
      });
    })
    .delete(function(req, res) {
      Message.remove({
        _id: req.params.message_id}, function(err, message) {
          if(err) {
            res.send(err);
          }
          res.json({ message: 'The message has been deleted.'});
      });
    });


// start server
app.listen(port, function() {
  console.log('Spreading love at http://localhost:' + port);
})

// module.exports = app;
