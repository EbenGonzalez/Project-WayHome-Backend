const History = require('../models/history.models')
const User = require('../models/users.models')

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
    const History = await History.findByPk(req.params.id)

    if (History) {
      return res.status(200).json(History)
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
        receiver_id: res.locals.user.id,   
      }
    })
    if (history) {
      return res.status(200).json({
        message: 'This are all your history',
        history: history
      })
    } else {
      return res.status(404).send('You have not any history already')
    }
  } catch (error) {
    res.json(error)
  }
}

//Falta un controlador GET	/history/me/:Id

//revisar
async function createHistory(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const history = await History.create({
        ownerId: user.id,
        score: req.body.message,
        comments: req.body.comments,
        volunteersId: req.body.volunteersId,
        userId: req.body.volunteersId
      })
      return res.status(200).json({ message: 'History created' })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//revisar
async function createOwnHistory(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const history = await History.create({
        ownerId: user.id,
        score: req.body.score,
        volunteersId: req.body.volunteersId,
        petId: pet.id
      })
      return res.status(200).json({ message: 'Yor history has been created' })
    } else {
      return res.status(404).send('Device not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateHistory(req, res) {
  try {
    const history = await history.update(req.body, {
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
        owner: res.locals.user.id,
        id: req.params.id
      }
    })
    if (history) {
      await History.update(req.body)
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