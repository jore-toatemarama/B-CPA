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
      name: 'Mage',
      description: 'Mages use Mana to manipulate the ether and weave spells in their specialized element, ocassionally an extremely powerful mage may possess multiple elemental specializations',
      secondary: 'Ranged, DPS',
      icon: '✨',
    },

    { 
      id: 2,
      name: 'Priest',
      description: 'Priests are usually a weaver that specializes in Water/Air or similar elements that weave spells for the purpose of healing and revitalizing their allies, Evil priests are almost unheard of',
      secondary: 'Mixed, Healing',
      icon: '💖',
    },

    { 
      id: 3,
      name: 'Guardian',
      description: 'A Guardians role is primarily to defend their allies, therefore the best guardians specialize in Earth, Water or another defensive element and use their weaving to taunt, block and divert enemies',
      secondary: 'Melee, Tank',
      icon: '🛡️',
    },

    { 
      id: 4,
      name: 'Warrior',
      description: 'Warriors primarily focus on their physical skills over weaving, however many augment their fighting abilities with spells to level the playing field with other more spell heavy weavers. They are often Melee and specialize in elements such as Fire, Air or Lightning',
      secondary: 'Melee, DPS',
      icon: '⚔️',
    },

  ]);
};
