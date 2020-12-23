import knex from 'knex'
import config from '../knexfile.js'

export function getKnex() {
  return knex(config)
}
