const { mealService } = require('../services')
module.exports = {
  getMeals: async (req, res) => {
    const meals = await mealService.getMeals({ owner: req.session.user.owner })
    const user = req.session.user
    return res.render('owner/meal', { meals, user })
  },
  addMeal: async (req, res) => {
    await mealService.addMeal(req.body)
    res.redirect('/meal')
  },
  deleteMeal: async (req, res) => {
    await mealService.deleteMeal({ _id: req.params.id })
    res.redirect('/meal')
  },
}
