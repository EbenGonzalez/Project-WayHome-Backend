const Pet = require('../models/pet')

async function getAllInfoPets(req, res) {
  try {
    const info = await Pet.findAll(
      {
        where: req.query
      })
      if (info) {
        return res.status(200).json(info)
      } else {
        return res.status(404).send("No hemos encontrado ");
      }
  } catch (error) {
    res.status(500).send(message.error)
  } 
}

async function getOneInfoPet(req, res) {
  try {
    const info = await Pet.findByPk(req.params.id)

    if (info) {
      return res.status(200).json(info)
    } else {
      return res.status(404).send('Info not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createInfoPet(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id)
    console.log(pet)
    const info = await Pet.create(req.body)
    await pet.setPet(info) //revisar, crea la info, pero no la añade al userID
    return res.status(200).json({ message: 'Info created', info: info, pet: pet})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateInfoPet(req, res) {
  try {
    const info = await Pet.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (info) {
     return res.status(200).json({ message: `Info with ID ${req.params.id} has been updated`})
    } else {
      return res.status(404).send('Info not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteInfoPet(req, res) {
  try {
    const info = await Pet.destroy({
      where: {
        id: req.params.id
      }
    })
    if (info) {
      return res.status(200).json(`Info with ID ${req.params.id} deleted`)
    } else {
      return res.status(404).send('Info not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
getAllInfoPets,
getOneInfoPet,
createInfoPet,
updateInfoPet,
deleteInfoPet
}