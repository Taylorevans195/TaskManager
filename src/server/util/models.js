const db = require('./database')
const {DataTypes} = require('sequelize')

module.exports = {
  User: db.define('user', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  })
}