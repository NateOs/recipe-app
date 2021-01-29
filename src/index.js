'use strict'

import Recipe_ from "./recipe"
import { renderRecipes, summaryDOM } from "./views"
import { setFilters } from "./filters"


const theRecipe = new Recipe_()

document.querySelector('#searchItem').addEventListener('input', (e) => {
    const updates = {
        searchText : e.target.value
    }
    
    setFilters(updates)
    console.log(updates.searchText)
})

document.querySelector('#add-newBtn').addEventListener('click', (e) => {
    const id = theRecipe.addRecipe()
    location.assign(`/edit.html#${id}`)
})

renderRecipes()
summaryDOM()
