console.log("The  follow bot is going to start")
let Twit = require("twit")
let config = require("./config")

console.log(config)
let T = new Twit(config)

tweetIt()
setInterval(tweetIt, 1000 * 50)

function tweetIt() {
  let r = Math.floor(Math.random() * 500)

  let tweet = {
    status: "Hi i am Twitter Bot working for my master " + r + " #CodingfromNodejs"
  }

  T.post("statuses/update", tweet, tweeted)

  function tweeted(err, data, response) {
    if (err) {
      console.log("something went wrong!")
    } else {
      console.log("yay It Worked")
    }
  }
}
