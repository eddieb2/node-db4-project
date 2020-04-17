SELECT ri.recipe_id, ri.ingredient_id, ingredients.ingredient_name, recipes.recipe_name
FROM recipe_ingredients as ri
JOIN ingredients on ri.ingredient_id = ingredients.id
JOIN recipes on ri.recipe_id = recipes.id;


// results
1	1	apple	apple pie
2	2	steak	steak salad
2	3	salad	steak salad


SELECT ri.recipe_id, ingredients.ingredient_name, recipes.recipe_name, ri.quantity
FROM recipe_ingredients as ri
JOIN ingredients on ri.ingredient_id = ingredients.id
JOIN recipes on ri.recipe_id = recipes.id;

// results
1	apple	apple pie	1 cup
2	steak	steak salad	2 cup
2	salad	steak salad	4 cup