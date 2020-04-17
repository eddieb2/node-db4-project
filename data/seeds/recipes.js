exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'apple pie', instructions: 'burn it' },
        { recipe_name: 'steak salad', instructions: 'steak plus salad' },
      ]);
    });
};
