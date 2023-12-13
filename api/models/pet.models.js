const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Pet = connection.define("pet", {
 name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM,
    values: ['free', 'embrace','adoption'],
    defaultValue: 'free'
  },
 age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true
  },
  size: {
    type: DataTypes.STRING,
    allowNull: true
  },
  character: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  info: {
    type: DataTypes.TEXT,
    allowNull: true
  }
},
  {
    timestamps: false
  }
);

module.exports = Pet