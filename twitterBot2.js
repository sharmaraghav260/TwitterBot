console.log("The bot is starting");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var tweet = {
  status: 'hello world! #FirstTweet'
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
