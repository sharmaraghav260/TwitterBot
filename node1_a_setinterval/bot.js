console.log("The random number bot is starting");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);



tweetIt();
setInterval(tweetIt, 1000*10);

function tweetIt(){
  var r = Math.floor(Math.random()*100);


  var tweet = {
    status: 'here is a random number ' + r + ' #coding from node.js'
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
