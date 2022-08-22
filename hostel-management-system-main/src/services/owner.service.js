const { Owner } = require('../models')
module.exports = {
  create: (owner) => {
    return Owner.create(owner)
  },
  find: (query) => {
    return Owner.find(query)
  },
  findOne: (query) => {
    return Owner.findOne(query)
  },
  findById: (id) => {
    return Owner.findById(id)
  },
  update: (id, owner) => {
    return Owner.findByIdAndUpdate(id, owner)
  },
  delete: (id) => {
    return Owner.findByIdAndDelete(id)
  },
}
