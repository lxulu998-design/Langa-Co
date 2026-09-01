const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const services = require('./services.json')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/api/services', (req, res) => {
  res.json(services)
})

app.post('/api/contact', (req, res) => {
  const payload = req.body
  console.log('Contact submission:', payload)
  // TODO: wire up SMTP or third-party email here.
  res.status(200).json({status: 'ok'})
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`API listening on ${PORT}`))
