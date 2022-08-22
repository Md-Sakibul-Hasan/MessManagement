const mongoose = require('mongoose')

const managerSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
    },
    nid: {
      type: String,
    },
    address: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
 * @typedef Manager
 */
const Manager = mongoose.model('Manager', managerSchema)

module.exports = Manager
