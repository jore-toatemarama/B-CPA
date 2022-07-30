exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('races').del()
  await knex('races').insert([
    { 
      id: 1,
      name: 'Human',
      description: 'Humans are native to the planet Terra, they are the dominant life form in the Intergalactic Monarchy and the most commonly found. they are mostly a jack of all trades race that rely on intelligence and agility over brute strength',
    },

    { 
      id: 2,
      name: ' Mizrada',
      description: 'Mizrada are native to the planets Aramane, Avagrim and Mizgadon, they are the dominant life form in the Fourth Mizgamin Imperium. they are a brutal warrior race made up of different subraces in clans that follow a chieftan/emperor of sorts',
    },
  ]);
};
