const express = require('express')
const auth = require('../middleware/auth.middleware')
const studentController = require('../controllers/student.controller')
const router = express.Router()

router
  .route('/')
  .get(auth(['owner']), studentController.getStudents)
  .post(studentController.addStudent)

router.route('/:id').delete(auth(['owner']), studentController.deleteStudent)

module.exports = router
