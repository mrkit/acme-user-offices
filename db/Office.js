const db = require('./db');
const Sequelize = require('sequelize');

const Office = db.define('office', {
  name: Sequelize.STRING,
  lat: Sequelize.FLOAT,
  lng: Sequelize.FLOAT
})

module.exports = Office;