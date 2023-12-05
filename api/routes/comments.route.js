const router = require('express').Router()

const {
  getAllComments,
  getOneComment,
  createComment,
  updateComment,
  deleteComment,
  getOwnComment,
  updateOwnComment,
  deleteOwnComment,
  createOwnComment,
  getOwnCommentAuthor
} = require("../controllers/comment.controllers")

const {
  checkAuth,
  checkAdmin
} = require("../middlewares/")

router.get('/inbox/me', checkAuth, getOwnComment)
router.get('/send/me', checkAuth, getOwnCommentAuthor)
router.get('/', checkAuth, checkAdmin, getAllComments)
router.get('/:id',checkAuth, checkAdmin, getOneComment)
router.post('/me', checkAuth, createOwnComment)
router.post('/', checkAuth, checkAdmin, createComment)
router.put('/me/:id', checkAuth, updateOwnComment)
router.put('/:id', checkAuth, checkAdmin, updateComment)
router.delete('/me/:id',checkAuth, deleteOwnComment)
router.delete('/:id', checkAuth,checkAdmin, deleteComment)

module.exports = router