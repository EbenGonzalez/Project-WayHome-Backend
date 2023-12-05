const router = require('express').Router()

router.use('/auth', require('./auth.route'))
router.use('/users', require('./users.route'))
router.use('/pets', require('./pet.route'))

module.exports = router