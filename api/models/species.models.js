const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Species = connection.define('species',
    {
      type: {
        type: DataTypes.ENUM("dog","cat"),
      },
    },
    { timestamps: false }
  )
  
  module.exports = Species