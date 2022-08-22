const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max: 11,
      validate(value) {
        if (!value.match(/^01[3456789][\d]{8}/)) {
          throw new Error('Invalid phone Number')
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      // minlength: 8,
      // validate(value) {
      //   if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
      //     throw new Error('Password must contain at least one letter and one number')
      //   }
      // },
    },
    role: {
      type: String,
      enum: ['owner', 'manager'],
      default: 'owner',
    },
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner',
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Manager',
    },
    passwordChangedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

/**
 * Check if mobile is taken
 * @param {string} mobile - The user's mobile
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isMobileTaken = async function (mobile, excludeUserId) {
  const user = await this.findOne({ mobile, _id: { $ne: excludeUserId } })
  return !!user
}
// userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } })
//   return !!user
// }

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this
  return bcrypt.compare(password, user.password)
}

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema)

module.exports = User
