console.log("The follow bot is starting");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);
function followed(eventMsg) {
  console.log("Follow event!");
  var name = eventMsg.source.name;
  var userHandle = eventMsg.source.screen_name;
  tweetIt('@' + userHandle + ' Thank you for the Follow!')
}

//tweetIt();
//setInterval(tweetIt, 1000*10);

function tweetIt(text){
  //var r = Math.floor(Math.random()*100);
  // 'here is a random number ' + r + ' #coding from node.js'

  var tweet = {
    status: text
  };
  //  tweet 'hello world!'
  T.post('statuses/update', tweet, tweeted);

  function tweeted (err, data, response) {
    if(err){
      console.log("Something went wrong!");
      console.log(data);
    }else{
      console.log("It worked!");
    }
  }
}
