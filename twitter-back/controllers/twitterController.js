import client from '../config/twitter.js'

class TwitterController {
  static sendTweet(req, res) {

    let tweet = req.body.tweet
    client.post('statuses/update', { status: tweet }).then(result => {
      res.status(200).json({ message: 'Tweet sent successfully.', tweet: result.text, status: 200 })
    }).catch(error => {
      res.status(400).json(error)
    });
  }

  static deleteTweet(req, res) {
    let id = req.body.id

    client.post(`statuses/destroy/${id}.json`, { status: id }).then(result => {
      res.status(200).json({ message: 'Tweet deleted successfully.', status: 200 })
    }).catch(error => {
      let code = error[0].code
      let message = error[0].message
      res.status(400).json(message)
    })
  }

  static viewTweet(req, res) {
    let id = req.params.id

    client.get(`statuses/show/${id}.json`, { status: id }).then(result => {
      res.status(200).json({ message: result, status: 200 })
    }).catch(error => {
      let message = error[0].message
      res.status(400).json(message)
    })
  }

  static searchUserTweets(req, res) {
    let user = req.params.user
    
    client.get(`https://api.twitter.com/2/tweets/search/recent?query=from:${user}`, {}).then(result => {
      res.status(200).json({ message: result, status: 200 })
    }).catch(error => {
      let message = error[0].message
      res.status(400).json(message)
    })
  }
}

export default TwitterController