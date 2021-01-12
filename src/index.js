import Recipe_ from "./recipe"
import { exposeRecipes } from "./views"
import { setFilters } from "./filters"
import { generateRecipeDOM } from "./views"

const theRecipe = new Recipe_()

document.querySelector('#searchItem').addEventListener('input', (e) => {
    setFilters({
        searchText : e.target.value
    })
})

document.querySelector('#add-newBtn').addEventListener('click', (e) => {
    const id = theRecipe.addRecipe()
    location.assign(`/edit.html#${id}`)
})

generateRecipeDOM()


    // TODO get items id
    // TODO use id to update item