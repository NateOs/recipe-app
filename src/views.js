import Recipe_ from "./recipe"
import { getFilters } from "./filters"

const xRecipes = new Recipe_()




//TODO GenerateRecipeDom

const generateRecipeDOM = () => {
    const recipeEle = document.createElement('a')
    const titleEle = document.createElement('p')
    const statusEle = document.createElement('p')

    const recipes = xRecipes.exposeRecipes()

    for (let recipe of recipes) {
        console.log(recipe)

        let title = recipe.title
        let ingredients = recipe.ingredients // todo just use array length to tell user number ingredients in there

        
    }
    


}


//todo Generate ingredients summaryDOM

//todo Generate ingredientsDDOM

//todo Generate RecipeTextDOM

//todo Render()

export { generateRecipeDOM }