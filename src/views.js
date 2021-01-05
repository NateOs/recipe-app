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
        console.log(title)

        let ingredients = recipe.ingredients
        console.log(ingredients)
        
        console.log(Object.values(ingredients).reduce((a, item) => a + item, 0))


        
    }
    


}


//todo Generate ingredients summaryDOM

//todo Generate ingredientsDDOM

//todo Generate RecipeTextDOM

//todo Render()

export { generateRecipeDOM }