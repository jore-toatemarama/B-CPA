exports.up = async knex => {
  await knex.schema.createTable('cards', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('name')
    table.integer('age')
    table.string('image')
    table.text('description')

    table.string('element')
    table.string('race')
    table.string('class')

    table.text('ability_one_id')
    table.text('ability_two_id')
    table.text('ability_three_id')
    table.text('ability_four_id')
    table.text('ability_supreme_id')
    table.text('ability_passive_id')
  })
}

exports.down = async knex => {
  await knex.schema.dropTable('cards')
}