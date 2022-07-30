exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { 
      id: 1,
      user_id: 1,
      name: 'David & Goliath',
      age: 28,
      image: 'https://cdn.discordapp.com/attachments/997271873551351808/1002868084358529024/Releaser_Steampunk_Earth_Wizard_with_a_Giant_Golem_posing_cheer_16e7dc1d-451c-4a67-a2f2-c3b176299262.png',
      description: 'Desperate to prove himself worthy of the power bestowed upon him as a youth, David is an anxious but calculating fighter, but his enemies are usually too busy with Goliath too notice',

      element: 'Earth',
      race: 'Human',
      class: 'Mage',

      ability_one_id: 1,
      ability_two_id: 2,
      ability_three_id: 3,
      ability_four_id: 4,
      ability_supreme_id: 5,
      ability_passive_id: 6,
    },
  ]);
};
