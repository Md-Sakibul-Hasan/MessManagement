const express = require('express')
const auth = require('../middleware/auth.middleware')
const mealController = require('../controllers/meal.controller')
const router = express.Router()

router
  .route('/')
  .get(auth(['owner']), mealController.getMeals)
  .post(mealController.addMeal)

router.route('/:id').delete(auth(['owner']), mealController.deleteMeal)

module.exports = router
