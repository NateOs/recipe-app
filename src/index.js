import Recipe_ from "./recipe"
import { renderRecipes } from "./views"
import { setFilters } from "./filters"


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

renderRecipes()

// generateRecipeDOM()


    // TODO get items iddd 
    // TODO use id to update item