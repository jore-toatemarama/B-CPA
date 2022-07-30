exports.up = async knex => {
  await knex.schema.createTable('races', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
  })
}

exports.down = async knex => {
  await knex.schema.dropTable('races')
}
