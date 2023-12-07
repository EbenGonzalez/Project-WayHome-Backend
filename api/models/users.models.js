const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const User = connection.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notNull: {
        msg: "Please enter your mail",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  background: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  profile: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  info: {
    type: DataTypes.STRING,
    allowNull: true
  },
  media: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  role: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'user'
  },
  userRole: {
    type: DataTypes.ENUM,
    values: ['user', 'volunteer'],
    defaultValue: 'user'
  }
},
  {
    timestamps: false
  }
);


module.exports = User