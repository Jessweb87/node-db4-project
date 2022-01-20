const recipes = [
    {recipe_name: 'Mango Avocado Salsa'},
    {recipe_name: 'Shrimp Alfredo'},
    {recipe_name: 'Lemon Pepper Chicken'},
]
const ingredients = [
    { ingredient_name: 'Mango', ingredient_unit: 'lbs' },
    { ingredient_name: 'Avocado', ingredient_unit: 'lbs' },
    { ingredient_name: 'Tomato', ingredient_unit: 'lbs' },
    { ingredient_name: 'Shrimp', ingredient_unit: 'lbs' },
    { ingredient_name: 'Alfredo sauce', ingredient_unit: 'grams' },
    { ingredient_name: 'Linguine Pasta', ingredient_unit: 'lbs' },
    { ingredient_name: 'Lemon Pepper', ingredient_unit: 'grams' },
    { ingredient_name: 'Chicken', ingredient_unit: 'lbs' },
]
const step_ingredients = [
     // Mango Avocado Salsa
     { step_id: 1, ingredient_id: 1, quantity: 1},
     { step_id: 2, ingredient_id: 2, quantity: 1},
     { step_id: 3, ingredient_id: 3, quantity: 1},
     // Shrimp Alfredo
     { step_id: 4, ingredient_id: 4, quantity: 2},
     { step_id: 5, ingredient_id: 5, quantity: 1.5},
     { step_id: 6, ingredient_id: 6, quantity: 2},
     // Lemon Pepper Chicken
     { step_id: 7, ingredient_id: 7, quantity: 0.5},
     { step_id: 8, ingredient_id: 8, quantity: 2},
]

const steps = [
    // Mango Avocado Salsa
    { step_text: 'Dice mango', step_number: 1, recipe_id: 1},
    { step_text: 'Dice avocado', step_number: 2, recipe_id: 1},
    { step_text: 'Dice tomato and mix well', step_number: 1, recipe_id: 1},
    // Shrimp Alfredo
    { step_text: 'Cook shrimp', step_number: 1, recipe_id: 2},
    { step_text: 'Add alfredo sauce', step_number: 2, recipe_id: 2},
    { step_text: 'Add cooked linguine pasta and mix', step_number: 3, recipe_id: 2},
    // Lemon Pepper Chicken
    { step_text: 'Coat chicken with lemon pepper seasoning', step_number: 1, recipe_id: 3},
    { step_text: 'Add oil', step_number: 2, recipe_id: 3},
    { step_text: 'Put in oven at 450 degrees', step_number: 3, recipe_id: 3},
]
exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
};