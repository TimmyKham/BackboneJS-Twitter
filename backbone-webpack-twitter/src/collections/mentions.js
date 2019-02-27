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
    /**
     * Fonction stream
     * @construtor
     * @param {object} tweet
     */
    socket.on('on.received.tweet', function stream (tweet) {
      this.addMention(tweet);
    }.bind(this));
  },
  /**
   * Fonction d'ajout de mention
   * @constructor
   * @param {object} mention
   */
  'addMention': function addMention (mention) {
    this.add(mention);
  }
});

module.exports = new Mentions();
