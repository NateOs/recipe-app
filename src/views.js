import Recipe_ from "./recipe"
import { getFilters } from "./filters"

const xRecipes = new Recipe_()
const recipes = xRecipes.exposeRecipes()

console.log(recipes)

//TODO GenerateRecipeDom

const generateRecipeDOM = () => {
    const recipeEle = document.createElement('a')
    const textEle = document.createElement('p')
    const statusEle = document.createElement('p')

    const recipePlace = document.querySelector('#recipes')

    textEle.textContent = 'Kokonte with beef soup'
    statusEle.textContent = 'You have no ingredient available'

    recipeEle.appendChild(textEle)
    recipeEle.appendChild(statusEle)

    recipePlace.appendChild(recipeEle)

}



//todo Generate ingredients summaryDOM

//todo Generate ingredientsDDOM

//todo Generate RecipeTextDOM

//todo Render()

export { generateRecipeDOM }