const { Meal } = require('../models')
module.exports = {
  addMeal: (meal) => {
    return Meal.create(meal)
  },
  getMeals: async (query) => {
    return Meal.find(query)
  },
  getMeal: async (query) => {
    return Meal.findOne(query)
  },
  updateMeal: async (query, update) => {
    return Meal.updateOne(query, update)
  },
  deleteMeal: async (query) => {
    return Meal.deleteOne(query)
  },
}
