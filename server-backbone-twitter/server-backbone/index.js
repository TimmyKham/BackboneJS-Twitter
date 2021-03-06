/** Appel des Dépendances */
var app = require('http').createServer();
var io = require('socket.io').listen(app);
var Twitter = require('twitter');

/** Écoute le serveur port 3000 */
app.listen(3000);
 
/** Ajout des clés d'accès pour accéder à l'API */
var client = new Twitter({
  consumer_key: 'zFMdgShVOGmqYovC76MCSuqeR',
  consumer_secret: 'rhpsO6aFRvdIFvJZzhEKB7O7Sg6plTLw30f4huJSjt9bUD6kWX',
  access_token_key: '1098932636104474625-ugtLo07q00M4twJu0DEC5vTkqhd6Lb',
  access_token_secret: 'x2VQ724GCqt1bvnKpVgeQeyKjUj9vk1YUByc2sZSli3JI'
});

/**
 * @constructor
 * @param {object} mention 
 */
var formatter = function formatter (mention) {
  var date_tweet = new Date(mention.created_at).toLocaleTimeString();
  return {
    'createdAt': date_tweet,
    'id': mention.id_str,
    'text': mention.text,
    'user': {
      'name': mention.user.name,
      'screen_name': mention.user.screen_name,
      'avatar': mention.user.profile_image_url
    },
    'replyCount': mention.reply_count,
    'retweetCount': mention.retweet_count,
    'favoriteCount': mention.favorite_count,
    'location': mention.user.location
  }
}

var stream = client.stream('statuses/filter', {track: 'travel'});
io.on('connection', function(socket){
  stream.on('data', function(mention) {
      if (mention) {
        socket.emit('on.received.tweet', formatter(mention));
      }
  });
});

stream.on('error', function(error) {
  throw error;
});
