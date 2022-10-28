import express from 'express'
import TwitterController from '../controllers/twitterController.js'

const router = express.Router()

router
  .get('/:user', TwitterController.searchUserTweets)
  .get('/view/:id', TwitterController.viewTweet)
  .post('/send', TwitterController.sendTweet)
  .delete('/', TwitterController.deleteTweet)

export default router