const History = require('../models/history.models')
const User = require('../models/users.models')
const Pet = require('../models/pet.models')
const { Op } = require('sequelize')

async function getAllHistories(req, res) {
  try {
    const history = await History.findAll(
      {
        where: req.query
      })
    if (history) {
      return res.status(200).json(history)
    } else {
      return res.status(404).send("No history found");
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneHistory(req, res) {
  try {
    const history = await History.findByPk(req.params.id)

    if (history) {
      return res.status(200).json(history)
    } else {
      return res.status(404).send('History not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOwnHistory(req, res) {
  try {
    const history = await History.findAll({
      where: {
        [Op.or]: [
          { volunteersId: res.locals.user.id },
          { ownerId: res.locals.user.id }
        ]
      },
      include: [{ model: User },{ model: Pet }]
    })
    if (history) {
      return res.status(200).json({
        message: 'This is all your history',
        history: history
      })
    } else {
      return res.status(404).send('You do not have any history')
    }
  } catch (error) {
    res.json(error)
  }
}

async function createHistory(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const history = await History.create({
        ownerId: user.id,
        score: req.body.score,
        comments: req.body.comments,
        volunteersId: req.body.volunteersId,
        petId: req.body.petId,
        userId: user.id
      })
      return res.status(200).json({ message: 'History created' })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createOwnHistory(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const history = await History.create({
        ownerId: user.id,
        score: req.body.score,
        volunteersId: req.body.volunteersId,
        comments: req.body.comments,
        petId: req.body.petId,
        userId: user.id
      })
      return res.status(200).json({ message: 'Your history has been created', history })
    } else {
      return res.status(404).send('Device not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateHistory(req, res) {
  try {
    const history = await History.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (history) {
      return res.status(200).json({ message: `history with ID ${req.params.id} has been updated` })
    } else {
      return res.status(404).send('history not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateOwnHistory(req, res) {
  try {
    const history = await History.findOne({
      where: {
        ownerId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (history) {
      await history.update(req.body)
      return res.status(200).json({ message: 'Yor history has been updated :)' })
    } else {
      return res.status(404).send('History not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteHistory(req, res) {
  try {
    const history = await History.destroy({
      where: {
        id: req.params.id
      }
    })
    if (history) {
      return res.status(200).json(`History with ID ${req.params.id} deleted`)
    } else {
      return res.status(404).send('History not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllHistories,
  getOneHistory,
  getOwnHistory,
  createHistory,
  createOwnHistory,
  updateHistory,
  updateOwnHistory,
  deleteHistory,
}