// Dependencies
var Backbone = require('backbone');

// Collections
var mentionsCollection = require('./collections/mentions.js');

// Controllers
var TwitterRealTimeController = require('./controllers/twitter-realtime');

// Router
var Router = Backbone.Router.extend({
  'routes': {
    '*actions': 'loadTweets'
  }
});

var router = new Router();

router.on('route:loadTweets', function defautRoute () {
  var twitterRealTimeController = new TwitterRealTimeController({
    'collection': mentionsCollection
  });

  twitterRealTimeController.render();
});

Backbone.history.start({
  'pushState': true
});
