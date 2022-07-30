exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('elements').del()
  await knex('elements').insert([
    { 
      id: 1,
      name: 'Earth',
      description: 'The ability to manipulate the earth, including metals and ores.',
      counter: 'Air',
      icon: '🌱',
    },

    { 
      id: 2,
      name: 'Water',
      description: 'The ability to manipulate liquids, this is often used defensively',
      counter: 'Lightning, Ice',
      icon: '🌊',
    },

    { 
      id: 3,
      name: 'Fire',
      description: 'The ability to manipulate and create fire, this is often used offensively',
      counter: 'Water, Earth',
      icon: '🔥',
    },

    { 
      id: 4,
      name: 'Air',
      description: 'The ability to manipulate air and gases, this element is extremely rare',
      counter: 'Ice',
      icon: '💨',
    },

    { 
      id: 5,
      name: 'Lightning',
      description: 'The ability to create and manipulate lightning and electrical currents',
      counter: 'Earth, Ice',
      icon: '⚡',
    },

    { 
      id: 6,
      name: 'Ice',
      description: 'The ability to freeze liquids and gases and freely manipulate them once frozen, intersects with Earth',
      counter: 'Fire',
      icon: '⚡',
    },
  ]);
};
