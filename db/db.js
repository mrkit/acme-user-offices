const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);
//process.env.DATABASE_URL doesn't work? 'postgres://localhost/acme_users_offices'

module.exports = db;