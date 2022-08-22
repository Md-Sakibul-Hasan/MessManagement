const express = require('express')
const authController = require('../controllers/auth.controller')
const router = express.Router()

router.route('/login').get(authController.getLogin).post(authController.postLogin)

router.route('/register').get(authController.getRegister).post(authController.postRegister)

router.get('/forgot-password', authController.getForgotPassword)

router.route('/logout').get(authController.logout)

module.exports = router
