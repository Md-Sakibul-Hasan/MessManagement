const { studentService } = require('../services')
module.exports = {
  getStudents: async (req, res) => {
    const students = await studentService.getStudents({ owner: req.session.user.owner })
    const user = req.session.user
    return res.render('owner/student', { students, user })
  },
  addStudent: async (req, res) => {
    await studentService.addStudent(req.body)
    res.redirect('/student')
  },
  deleteStudent: async (req, res) => {
    await studentService.deleteStudent({ _id: req.params.id })
    res.redirect('/student')
  },
}
