const Race = require('../models/races.models')

async function getAllRaces(req, res) {
  try {
    const race = await Race.findAll(
      {
        where: req.query
      })
    if (race) {
      return res.status(200).json(race)
    } else {
      return res.status(404).send("No hemos encontrado ninguna mascota ");
    }
  } catch (error) {
    res.status(500).send(message.error)
  }
}

module.exports = {
  getAllRaces
}