const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const flash = require('connect-flash')
const eta = require('eta')
const router = require('./routes/index')

const app = express()

app.engine('eta', eta.renderFile)
app.set('view engine', 'eta')
app.set('views', path.join(__dirname, './views'))
app.use(logger('dev'))
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash())

app.use('/', router)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Something went wrong')
})

// catch 404 and render 404 page
app.use((req, res, next) => {
  res.render('404')
})

module.exports = app
