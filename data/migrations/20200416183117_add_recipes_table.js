exports.up = function (knex) {
  return (
    knex.schema
      // RECIPES TABLE
      .createTable('recipes', (tbl) => {
        tbl.integer('id', 255).primary();
        tbl.string('recipe_name', 255).notNullable().unique();
        tbl.string('instructions', 255).notNullable();
      })

      // INGREDIENTS TABLE
      .createTable('ingredients', (tbl) => {
        tbl.integer('id', 255).primary();
        tbl.string('ingredient_name').notNullable().unique();
      })

      // JOINING TABLE
      .createTable('recipe_ingredients', (tbl) => {
        tbl.integer('id', 255).primary();
        tbl
          .integer('recipe_id')
          .notNullable()
          .references('id')
          .inTable('recipes')
          // FIXME not sure if this is needed?
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        tbl
          .integer('ingredient_id')
          .notNullable()
          .references('id')
          .inTable('ingredients')
          // FIXME not sure if this is needed?
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        tbl.string('quantity').notNullable();
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients');
};
