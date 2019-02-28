var template = require('ak-template');
var Backbone = require('backbone');

var tweetsTpl = require('./tweets.tpl');

module.exports = Backbone.View.extend({

  'el': '.mentions',
  'template': template(tweetsTpl),
  /**
   * Fonction d'initialisation
   * @constructor
   * Ecoute la collection au moment de l'ajout et on effectue un rendu
   */
  'initialize': function initialize () {
    this.listenTo(this.collection, 'add', this.render);
  },
  /**
  * Fonction de rendu
  * @constructor
  * Dans el (element) on passe le template qui contient la collection au format json
  */
  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }
});
