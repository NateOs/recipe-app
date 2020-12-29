import Recipe_ from "./recipe"
import { getFilters } from "./filters"

const xRecipes = new Recipe_()
const recipes = xRecipes.exposeRecipes()

console.log(recipes)

//TODO GenerateRecipeDom
// //Generate RecipeDOM
// const generateRecipeDOM = (recipes) => {
//     const containerElement = document.createElement('div')
//     const recipeElement = document.createElement('a')
//     const checkbox = document.createElement('checkbox')
//     const delButton = document.createElement('button')
//     const recipeText = docment.createElement('h2')



// }

//todo Generate ingredients summaryDOM

//todo Generate ingredientsDDOM

//todo Generate RecipeTextDOM

//todo Render()