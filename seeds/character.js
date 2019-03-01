exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
<<<<<<< HEAD
      return knex('character').insert([
        {id: 1, name: 'Thorgrim', sub_title:'Dwarf Cleric', description: 'You are a champion of the dwarven gods, sent to eradicate the evil deep inside Castle Ravenloft', AC: 16, HP: 8, speed: 5, surge:4, ability:'AID: You know healing techniques. At the end of your Hero Phase, if you did not attack, one other Hero on your tile regains 1 Hit Point.'},
        {id: 2, name: 'Kat', sub_title:'Human Rogue', description: 'You are stealthy and sneaky, and a master of sudden strikes and quick escapes. You laugh at danger, and have come to Castle Ravenloft to satisfy your curiosity and acquire treasure.', AC: 14, HP: 8, speed: 6, surge:4, ability:'TRAP EXPERT: You are an expert at finding and disabling Traps. You gain a +5 bonus to rolls to disable Traps.'},
        {id: 3, name: 'Allisa', sub_title:'Human Ranger', description: 'You are a master of bow and blade, with keen senses and dungeon skills. You are determined to stop the evil of Castle Ravenloft.', AC: 15, HP: 8, speed: 6, surge:4, ability:'SCOUT: You are a master explorer. During your Exploration Phase, you can explore one unexplored edge on your tile, even if you aren’t adjacent to it.'},
        {id: 4, name: 'Immeril', sub_title:'Eladrin Wizard', description: 'You are a powerful spellcaster from the magical lands of the Feywild. You seek arcane knowledge and magical treasure from the ruins of Castle Ravenloft.', AC: 14, HP: 6, speed: 6, surge:3, ability:'LORE: You know the secrets of Monsters. While another Hero is on the same tile as you, he or she gains a +1 bonus to attack rolls.'},
        {id: 5, name: 'Arjhan', sub_title:'Dragonborn Fighter', description: 'You are a mighty warrior, born to a clan of draconic humanoids. You have never lost a battle, and you have come to drive the evil out of the ruins of Castle Ravenloft.', AC: 17, HP: 10, speed: 5, surge:5, ability:'DEFENDER: You protect your friends. While another Hero is on the same time as you, he or she gains a +1 bonus to Armor Class.'}
||||||| merged common ancestors
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
=======
      return knex('character').insert([
        {
          id: 1, name: 'Alisa', level: '1', subtitle: 'Human Ranger',
          description: 'You are master of bow and blade with keen senses and dungeon skils you are determined to stop the evil of castle ravenloft',
          AC: '15', HP: '8', Speed: '6', SurgeValue: '4'
        },
        {
          id: 2, name: 'Arjhan', level: '1', subtitle: 'Dragonborn Fighter',
          description: 'You are a mighty warrior, born to a clan of draconic humanoids. You have never lost a battle, and you have come to drive evil out of the ruins of castle ravenloft',
          AC: '17', HP: '10', Speed: '5', SurgeValue: '5'
        },
        {
          id: 3, name: 'Immeril', level: '1', subtitle: 'Eladrin Wizard',
          description: 'You are a powerfull spellcaster from the magical lands of the Feywild. You seek arcane knowledge and magical treaure from the ruins of Castle Ravenloft.',
          AC: '14', HP: '6', Speed: '6', SurgeValue: '3'
        },

        {
          id: 4, name: 'Kat', level: '1', subtitle: 'Human Rouge',
          description: 'You are stealthy and sneaky, and a master of suddden strikes and quick escapes. You laugh at danger, and have come to Castle Ravenloft to satisfy your curiousity and aqquire treassure.',
          AC: '14', HP: '8', Speed: '6', SurgeValue: '4'
        },
        {
          id: 5, name: 'Thorgrim', level: '1', subtitle: 'Dwarf Cleric',
          description: 'You are a champion of the dwarven gods,m sent to eradicate the evil deep inside Castle Ravenloft',
          AC: '17', HP: '10', Speed: '5', SurgeValue: '5'
        }
>>>>>>> dev
      ]);
    });
};
