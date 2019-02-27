var template = require('ak-template');
var Backbone = require('backbone');

var tweetsTpl = require('./tweets.tpl');

module.exports = Backbone.View.extend({
  'el': '.mentions',
  'template': template(tweetsTpl),
  'initialize': function initialize () {
    this.listenTo(this.collection, 'add', this.render);
  },
  'render': function render () {
    console.log(this.collection.toJSON());
    this.$el.html(this.template(this.collection.toJSON().reverse()));
    return this;
  }
});
