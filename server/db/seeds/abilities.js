/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { 
      id: 1,
      name: 'Rock Whip',
      description: 'Pulls David to a target (Pulls Target to David)',
      image: '',
      icon: '',
      ability_type: 'normal',
    },

    { 
      id: 2,
      name: 'Sudden Blockage',
      description: 'Creates a 2hex radius wall of stone (Goliath may pass through)',
      image: '',
      icon: '',
      ability_type: 'normal',
    },

    { 
      id: 3,
      name: 'Rupture',
      description: 'Smashes the ground in a 3hex cone (Goliath will jump to any affected enemies, stunning on impact)',
      image: '',
      icon: '',
      ability_type: 'normal',
    },

    { 
      id: 4,
      name: 'Earthen Armour',
      description: 'Passively grants defense to nearby allies (Goliath will jump to David, Taunting for the next turn)',
      image: '',
      icon: '',
      ability_type: 'normal',
    },

    { 
      id: 5,
      name: 'Summon: Goliath',
      description: 'Summons Goliath to the field in front of David, (He will activate secondary effects on Davids abilities)',
      image: '',
      icon: '',
      ability_type: 'supreme',
    },

    { 
      id: 6,
      name: 'Sand Seal',
      description: 'Negates the first instance of damage taken',
      image: '',
      icon: '',
      ability_type: 'passive',
    },

  ]);
};
