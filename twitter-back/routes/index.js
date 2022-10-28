import express from 'express'
import twitter from './twitterRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({ message: 'Welcome' })
  })

  app.use(
    express.json(),
    twitter
  )
}

export default routes