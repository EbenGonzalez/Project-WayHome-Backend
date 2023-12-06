const router = require('express').Router()

const {
  getAllPets,
  getOnePet,
  getOwnPets,
  createPet,
  createOwnPet,
  updatePet,
  updateOwnPet,
  deletePet,
  deleteOwnPet
} = require('../controllers/pets.controller')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/', getAllPets)
router.get('/me', checkAuth, getOwnPets)
router.get('/:id', getOnePet)
router.post('/', checkAuth, checkAdmin, createPet)
router.post('/me', checkAuth, createOwnPet)
router.put('/me/:id', checkAuth, updateOwnPet)
router.put('/:id', checkAuth, checkAdmin, updatePet)
router.delete('/me/:id', checkAuth, deleteOwnPet)
router.delete('/:id', checkAuth, checkAdmin, deletePet)


module.exports = router