const mongoose = require('mongoose')

const roomSchema = mongoose.Schema(
  {
    roomNumber: {
      type: String,
    },
    floor: {
      type: String,
    },
    totalSeats: {
      type: Number,
    },
    availableSeats: {
      type: Number,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
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
 * @typedef Room
 */
const Room = mongoose.model('Room', roomSchema)

module.exports = Room
