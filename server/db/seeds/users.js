
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { 
      id: 1,
      username: 'Releaser',
      email: 'j.toatemarama@gmail.com',
      profile_picture: '',
      cards_created: 1,
    },
  ]);
};
