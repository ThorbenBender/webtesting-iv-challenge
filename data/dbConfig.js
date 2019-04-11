const knex = require('knex');
const config = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'delevopment';

module.exports = knex(configd[dbEnv]);