
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { 
      id: 1,
      username: 'Releaser',
      email: 'j.toatemarama@gmail.com',
      profile_picture: '',
      cards_created: 1,
    },
  ]);
};
