exports.up = async knex => {
  await knex.schema.createTable('elements', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
    table.string('counter')
    table.string('icon')
  })
}

exports.down = async knex => {
  await knex.schema.dropTable('elements')
}
