var io = require('socket.io-client');

var socket = io('http://localhost:3000');

// Dependencies
var Backbone = require('backbone');

// Models
var Mention = require('../models/mention.js');

// Collection
var Mentions = Backbone.Collection.extend({
  'model': Mention,
  'initialize': function initialize () {
    socket.on('on.received.tweet', function stream (tweet) {
      this.addMention(tweet);
    }.bind(this));
  },
  'addMention': function addMention (mention) {
    this.add(mention);
  }
});

module.exports = new Mentions();
