const mongoose = require('mongoose')

const mealSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner',
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

/**
 * @typedef Meal
 */
const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal
