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
router.get('/history/:id',checkAuth, checkAdmin, getOneHistory)
router.get('/history/me', checkAuth, getOwnHistory)
router.post('/history/me', checkAuth, createOwnHistory)
router.post('/', checkAuth, checkAdmin, createHistory)
router.put('/me/:id', checkAuth, updateOwnHistory)
router.put('/:id', checkAuth, checkAdmin, updateHistory)
router.delete('/:id', checkAuth,checkAdmin, deleteHistory)

module.exports = router