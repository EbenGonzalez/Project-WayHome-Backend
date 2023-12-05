const router = require('express').Router()

const {
  getAllHistories,
  getOneHistory,
  getOwnHistory,
  createHistory,
  createOwnHistory,
  updateHistory,
  updateOwnHistory,
  deleteHistory,
} = require("../controllers/history.controllers")

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/', checkAuth, checkAdmin, getAllHistories)
router.get('/me', checkAuth, getOwnHistory)
router.get('/:id',checkAuth, checkAdmin, getOneHistory)
router.post('/', checkAuth, checkAdmin, createHistory)
router.post('/me', checkAuth, createOwnHistory)
router.put('/:id', checkAuth, checkAdmin, updateHistory)
router.put('/me/:id', checkAuth, updateOwnHistory)
router.delete('/:id', checkAuth,checkAdmin, deleteHistory)

module.exports = router