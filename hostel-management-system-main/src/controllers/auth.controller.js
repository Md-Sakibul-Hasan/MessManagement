const { userService, ownerService } = require('../services')
module.exports = {
  getLogin: (req, res) => {
    res.render('login')
  },
  postLogin: async (req, res) => {
    try {
      console.log('hello')
      const { mobile, password } = req.body
      const user = await userService.findOne({ mobile })
      if (!user) {
        req.flash('error', 'user with this mobile not found')
        return res.redirect('/auth/login')
      }

      const isPasswordMatch = await user.isPasswordMatch(password)
      if (!isPasswordMatch) {
        req.flash('error', 'password is incorrect')
        return res.redirect('/auth/login')
      }
      user.password = undefined
      req.session.user = user
      req.session.isAuthenticated = true
      console.log('login success')
      res.redirect('/student')
    } catch (error) {
      next(error)
    }
  },
  getRegister: (req, res) => {
    res.render('register')
  },
  postRegister: async (req, res) => {
    const { name, mobile, email, password, hostelName } = req.body
    console.log(req.body)
    let user = await userService.checkIfUserExists(mobile)
    if (user) {
      req.flash('error', 'user with this mobile already exists')
      return res.redirect('/auth/register')
    }
    const owner = await ownerService.create({ name, mobile, email, hostelName })
    user = await userService.create({ mobile, owner: owner._id, password })
    user.password = undefined
    req.session.user = user
    req.session.isAuthenticated = true
    res.redirect('/student')
  },
  getForgotPassword: (req, res) => {
    res.render('forgot-password')
  },
  logout: async (req, res) => {
    await req.session.destroy()
    res.redirect('/auth/login')
  },
}
