const conn = require('../connection')

function getAllCards (db = conn) {
  return db('cards')
    .select()
}

module.exports = {
  getAllCards
}