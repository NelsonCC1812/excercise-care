require('dotenv').config()

const express = require('express')
const app = express()

require('./configs/mongoose.config')

// Middleware Setup
require('./configs/middleware.config')(app)

// Redirection from http to https
require('./configs/protocolRedirection.config')(app)

// Express View engine setup
require('./configs/viewEngine.config')(app)

//debug config
require('./configs/debug.config')

// Enable authentication using session + passport
require('./configs/session.config')(app)
require('./configs/passport')(app)

//cors config
require('./configs/cors.config')(app)

//base URLs
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/patient', require('./routes/patient.routes'))
app.use('/api/mbiSurvey', require('./routes/mbiSurvey.routes'))

app.use((req, res) => res.sendFile(__dirname + '/public/index.html'))

module.exports = app
