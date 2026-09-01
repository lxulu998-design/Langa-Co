const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const services = require('./services.json')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/api/services', (req, res) => {
  res.json(services)
})

async function sendEmail({from, subject, text, html}){
  // Use SMTP settings from environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
  })

  const info = await transporter.sendMail({
    from: process.env.FROM_EMAIL || from,
    to: process.env.MAIL_TO || process.env.FROM_EMAIL,
    subject,
    text,
    html
  })
  return info
}

app.post('/api/contact', async (req, res) => {
  const payload = req.body
  console.log('Contact submission:', payload)
  try{
    if(process.env.SMTP_HOST){
      await sendEmail({
        from: payload.email || process.env.FROM_EMAIL,
        subject: `New contact from ${payload.name}`,
        text: `${payload.name} (${payload.email})\n\n${payload.message}`,
        html: `<p><strong>${payload.name}</strong> (${payload.email})</p><p>${payload.message}</p>`
      })
    }
    res.status(200).json({status: 'ok'})
  }catch(err){
    console.error('Email error', err)
    res.status(500).json({status:'error', error: err.message})
  }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`API listening on ${PORT}`))
