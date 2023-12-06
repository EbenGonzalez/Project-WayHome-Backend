const router = require('express').Router()

const {
  getAllHistories,
  getOneHistory,
  createHistory,
  createOwnHistory,
  updateHistory,
  updateOwnHistory,
  deleteHistory,
  getOwnHistory,
} = require("../controllers/history.controllers")

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/', checkAuth, getAllHistories)
router.get('/me', checkAuth, getOwnHistory)
router.get('/me/:id', checkAuth, getOneHistory)
router.get('/:id',checkAuth, checkAdmin, getOneHistory)
router.post('/', checkAuth, checkAdmin, createHistory)
router.post('/me', checkAuth, createOwnHistory)
router.put('/:id', checkAuth, checkAdmin, updateHistory)
router.put('/me/:id', checkAuth, updateOwnHistory)
router.delete('/:id', checkAuth,checkAdmin, deleteHistory)

module.exports = router