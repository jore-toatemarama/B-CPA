exports.up = async knex => {
  await knex.schema.createTable('abilities', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
    table.string('image')
    table.string('icon')
    table.string('ability_type')
  })
}

exports.down = async knex => {
  await knex.schema.dropTable('abilities')
}
