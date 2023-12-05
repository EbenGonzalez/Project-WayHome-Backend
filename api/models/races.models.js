const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Race = connection.define('race',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  )
  
  module.exports = Race