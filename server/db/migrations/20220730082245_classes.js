exports.up = async knex => {
  await knex.schema.createTable('classes', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
    table.string('secondary')
    table.string('icon')
  })
}

exports.down = async knex => {
  await knex.schema.dropTable('classes')
}
