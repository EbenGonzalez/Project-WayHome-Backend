const Pet = require('../models/pet.models')
const User = require('../models/users.models')

async function getAllPets(req, res) {
  try {
    const pet = await Pet.findAll(
      {
        where: req.query
      })
    if (pet) {
      return res.status(200).json(pet)
    } else {
      return res.status(404).send("No hemos encontrado ninguna mascota ");
    }
  } catch (error) {
    res.status(500).send(message.error)
  }
}

async function getOnePet(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id)

    if (pet) {
      return res.status(200).json(pet)
    } else {
      return res.status(404).send('Mascota no encontrada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOwnPets(req,res){
	try {
		const pet=await Pet.findAll({
      where:{
        userId:res.locals.user.id
      }
    })
    if (pet.length!==0) {
      return res.status(200).json({ message: 'Estas son tus mascotas', pet})
    } else {
      return res.status(404).send('Todavia no tienes ninguna mascota')
    }
	} catch (error) {
		res.json(error)
	}
}

async function createPet(req, res) {
  try {
    const pet = await Pet.create(req.body)
    return res.status(200).json({ message: 'Mascota añadida correctamente', pet })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createOwnPet(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    if (user) {
      const pet = await Pet.create(req.body)
      await pet.setUser(user)
      return res.status(200).json({ message: 'Tu mascota ha sido añadida correctamente'})
    } else {
      return res.status(404).send('No se ha podido crear tu mascota')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updatePet(req, res) {
  try {
    const info = await Pet.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (info) {
      return res.status(200).json({ message: `La mascota con ID ${req.params.id} ha sido actualizada` })
    } else {
      return res.status(404).send('Mascota no encontrada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateOwnPet(req, res) {
  try {
    const pet = await Pet.findOne({
      where: {
        userId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (pet) {
      await pet.update(req.body)
      return res.status(200).json({ message: "Mascota Actualizada" })
    } else {
      return res.status(404).send('Mascota no encontrada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deletePet(req, res) {
  try {
    const info = await Pet.destroy({
      where: {
        id: req.params.id
      }
    })
    if (info) {
      return res.status(200).json(`La mascota con ID ${req.params.id} ha sido borrada.`)
    } else {
      return res.status(404).send('Mascota no encontrada')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteOwnPet(req, res) {
  try {
    const pet = await Pet.destroy({
      where: {
        userId: res.locals.user.id,
        id: req.params.id
      }
    })
    if (pet) {
      return res.status(200).json({ message: "Tu mascota ha sido eliminada correctamente" })
    } else {
      return res.status(404).send('No eres el dueño de esa mascota')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllPets,
  getOnePet,
  getOwnPets,
  createPet,
  createOwnPet,
  updatePet,
  deletePet,
  updateOwnPet,
  deleteOwnPet
}