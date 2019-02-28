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
     * Creer un evenement Fonction stream
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
    if (this.length > 5) {
      this.pop(); // Supprime un élément de la fin d'un tableau
      this.unshift(mention);// Ajoute des éléments au début d'un tableau
    } else {
      this.add(mention);
    }
  }
});

module.exports = new Mentions();
