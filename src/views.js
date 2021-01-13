import Recipe_ from "./recipe"
import { getFilters, setFilters } from "./filters"

const filters = getFilters()
const xRecipes = new Recipe_()

//TODO GenerateRecipeDom

const generateRecipeDOM = (recipe) => {

    const recipeEle = document.createElement('a')
    const titleEle = document.createElement('p')
    const statusEle = document.createElement('p')

    //* setup recipeTitle text
    if (recipe.title.length > 0) {
        titleEle.textContent = recipe.title
    } else {
        titleEle.textContent = 'Unnamed Recipe'
    }

    console.log(recipe.ingredients.length)

    if (recipe.ingredients.length > 0) {
        const ingredients = recipe.ingredients
        statusEle.textContent = `You have ${ingredients.length} ingredients`
    } else {
        statusEle.textContent = `You have no ingredients`
    }
        recipeEle.appendChild(titleEle)
        recipeEle.appendChild(statusEle)

    return recipeEle
}


//todo Generate ingredients summaryDOM

//todo Generate ingredientsDOM

//todo Generate RecipeTextDOM

//todo Render()

const renderRecipes = () => {
    const recipesEl = document.querySelector('#recipes')
    const recipes = xRecipes.exposeRecipes()
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    console.table(filteredRecipes)
    console.log(recipes)

    recipesEl.innerHTML = ''

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach( recipe => {
            const recipeEl = generateRecipeDOM(recipe)
            recipesEl.appendChild(recipeEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No recipes to show'
        recipesEl.appendChild(emptyMessage)
    }
}


export { generateRecipeDOM, renderRecipes }