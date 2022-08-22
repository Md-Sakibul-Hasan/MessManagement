const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
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
    monthlyRent: {
      type: Number,
      default: 0,
    },
    emergencyContact: {
      type: String,
    },
    paymentStatus: {
      type: String,
      enum: ['paid', 'unpaid', 'due'],
      default: 'unpaid',
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
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
 * @typedef Student
 */
const Student = mongoose.model('Student', studentSchema)

module.exports = Student
