const User = require('../api/models/users.models')
const Pet = require('../api/models/pet.models')
const Comment = require('../api/models/comments.models')
const History = require('../api/models/history.models')
const Race = require('../api/models/races.models')
const Species = require('../api/models/species.models')

function addRelationsToModels() {
  try {
    User.hasMany(Pet)
    Pet.belongsTo(User)

    User.hasMany(Comment)
    Comment.belongsTo(User)

    User.hasMany(History)
    History.belongsTo(User)

    Race.hasMany(Pet)
    Pet.belongsTo(Race)

    Species.hasMany(Race)
    Race.belongsTo(Species)
    
    Pet.hasMany(History)
    History.belongsTo(Pet)

    Species.hasMany(Pet)
    Pet.belongsTo(Species)

  } catch (error) {
    throw error
  }
}

module.exports = { addRelationsToModels }