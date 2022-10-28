import express from 'express'
import cors from 'cors'

import routes from './routes/index.js'

const app = express()
const port = 9595

const allowedOrigins = ['http://localhost:8080']
const corsOption = {
  origin: allowedOrigins
}

app.use(cors(corsOption))
app.use(express.json())

routes(app)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})