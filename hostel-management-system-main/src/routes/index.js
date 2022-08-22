const express = require('express')
const router = express.Router()

const indexRoute = require('./index.route')
const authRoute = require('./auth.route')
const studentRoute = require('./student.route')
const mealRoute = require('./meal.route')

const defaultRoutes = [
  {
    path: '/',
    route: indexRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/student',
    route: studentRoute,
  },
  {
    path: '/meal',
    route: mealRoute,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
