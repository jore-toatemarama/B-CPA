exports.up = async knex => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('email')
    table.string('profile_picture')
    table.integer('cards_created')
  })
}

exports.down = async knex => {
  await knex.schema.dropTable('users')
}
