const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getById,
  getShoppingList,
  getInstructions,
};

/*
 - `getRecipes()`: should return a list of all recipes in the database.
*/
function getRecipes() {
  return db('recipes');
}

function getById(id) {
  return db('recipes').where({ id });
}

/*
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
*/
function getShoppingList(recipe_id) {
  return db('recipe_ingredients as ri')
    .select(
      // 'ri.recipe_id',
      'i.ingredient_name',
      // 'r.recipe_name',
      'ri.quantity'
    )
    .join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
    .join('recipes as r', 'ri.recipe_id', '=', 'r.id')
    .where({ recipe_id });
}

/* 
- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe 
*/
function getInstructions(recipe_id) {
  return db('recipes').select('instructions').where({ id: recipe_id });
}
