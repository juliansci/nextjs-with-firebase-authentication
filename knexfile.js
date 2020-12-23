const { loadEnvConfig } = require('@next/env');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
  migrations: {
    directory: './knex/migrations',
  },
  seeds: {
    directory: './knex/seeds',
  },
};
