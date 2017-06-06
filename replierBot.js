console.log("The replier bot is starting");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
  var fs = require('fs');
  var json = JSON.stringify(eventMsg, null, 2);
  fs.writeFile("tweet.json", json);

  console.log("Follow event!");
  var replyTo = eventMsg.in_reply_to_screen_name;
  var text = eventMsg.text;
  var from = eventMsg.user.screen_name;

  console.log(replyTo + ' ' + from);
  if (replyTo === 'BotRaghu') {
    var newTweet = '@' + from + ' Thank you for the tweeting me! #coding';
    tweetIt(newTweet);
  }
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
