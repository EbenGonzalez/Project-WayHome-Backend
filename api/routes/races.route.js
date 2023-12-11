const router = require('express').Router()

const {
  getAllRaces
} = require('../controllers/races.controllers')

router.get('/', getAllRaces)

module.exports = router