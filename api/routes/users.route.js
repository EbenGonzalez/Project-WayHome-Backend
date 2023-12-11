const router = require('express').Router()

const {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateUser,
  deleteUser,
  updateOwnProfile,
  deleteOwnProfile,
  changePassword
} = require('../controllers/users.controllers')

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/', getAllUsers) 
router.get('/me', checkAuth, getOwnProfile) 
router.get('/:id', getOneUser) /
router.post('/', checkAuth, checkAdmin, createUser) 
router.put('/password', checkAuth, changePassword)
router.put('/me', checkAuth, updateOwnProfile) 
router.put('/:id', checkAuth, checkAdmin, updateUser) 
router.delete('/me', checkAuth, deleteOwnProfile) 
router.delete('/:id', checkAuth, checkAdmin, deleteUser)


module.exports = router