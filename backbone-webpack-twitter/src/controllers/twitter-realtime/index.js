var template = require('ak-template');
var Backbone = require('backbone');

require('./index.scss');

var twitterRealTime = require('./index.tpl');
var Tweets = require('./components/tweets');

module.exports = Backbone.View.extend({
  'el': '#app',
  'template': template(twitterRealTime),
  /**
   * Fonction de rendu
   * @constructor
   * Dans l'element html on passe le template
   */
  'render': function render () {
    this.$el.html(this.template());

    var tweets = new Tweets({
      'collection': this.collection
    });

    tweets.render();

    return this;
  }
});
