const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema(
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
    hostelName: {
      type: String,
    },
    hostelAddress: {
      type: String,
    },
    hostelPhone: {
      type: String,
    },
    hostelEmail: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Manager',
    },
  },
  {
    timestamps: true,
  }
)

/**
 * @typedef Owner
 */
const Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner
