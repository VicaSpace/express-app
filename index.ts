import express from 'express'
import { router } from './src/routes'

const app = express()
const port = 3001

app.use(express.json())

app.use('/api', router)

app.get('/', function (_req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})

app.get('*', (_req, res) => {
  res.status(404).send('Path doesnt exist')
})
