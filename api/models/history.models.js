const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const History = connection.define("history", {
 ownerId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 score: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: true
  },
  volunteersId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  petId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
},
  {
    timestamps: false
  }
);

module.exports = History