var path = require('path')
var userRoutes = require('./routes/userRoutes.js')
var sessions = require('client-sessions')

app.use(sessions({
    cookiename: 'session',
    secret: 'qwertyuiop'
}))

require('dotenv').config({
  path: path.join(__dirname, 'settings.env')
})

var mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
  useMongoClient: true
})

var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main'
    }))
    app.set('view engine', '.hbs')

app.use(express.static('public'))

userRoutes(app)
app.listen(3000)