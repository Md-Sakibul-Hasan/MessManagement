const { Student } = require('../models')

module.exports = {
  getStudents: (query) => {
    return Student.find(query)
  },
  getStudent: (query) => {
    return Student.findOne(query)
  },
  addStudent: (student) => {
    return Student.create(student)
  },
  updateStudent: (query, student) => {
    return Student.updateOne(query, student)
  },
  deleteStudent: (query) => {
    return Student.deleteOne(query)
  },
}
