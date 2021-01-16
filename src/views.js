'use strict'

import Recipe_ from "./recipe"
import { getFilters } from "./filters"

const filters = getFilters()
const xRecipes = new Recipe_()


//* GenerateRecipeDom
//todo add a attributes
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

    titleEle.classList.add('list-item__title')
    titleEle.setAttribute('href', `/edit.html#${recipe.id}`)

    console.log(recipe.ingredients.length)

    if (recipe.ingredients.length > 0) {
        const ingredients = recipe.ingredients
        statusEle.textContent = `You have ${ingredients.length} ingredients`
    } else {
        statusEle.textContent = `You have no ingredients`
    }

    statusEle.setAttribute('href', `/edit.html#${recipe.id}`)
    statusEle.classList.add('list-item__subtitle')
    
    recipeEle.appendChild(titleEle)
    recipeEle.appendChild(statusEle)

    recipeEle.setAttribute('href', `/edit.html#${recipe.id}`)
    recipeEle.classList.add('list-item')

    return recipeEle
}

//* render all recipes
const renderRecipes = () => {
    const recipesEl = document.querySelector('#recipes')
    const recipes = xRecipes.exposeRecipes()
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    console.table(filteredRecipes)
    console.log(filteredRecipes)
    console.log(recipes)

    recipesEl.innerHTML = ''
//! filterSearch isnt working!!!

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



//* recipe summaryDOM
const summaryDOM = () => {
    const recipes = xRecipes.exposeRecipes()
    const summary = document.createElement('p')
    const recipesEl = document.querySelector('#recipes')
    const recipesLength = recipes.length

    if (recipes.length > 0) {
        summary.textContent = `You have ${recipesLength} recipes.`
    } else {
        summary.textContent = `You have no recipes`
    }
    
    recipesEl.append(summary)
}


//* generate ingredientsDOM


//* render ingredientDOm

//* initialize editPage

const initializeEditPage = (recipeId) => {
    const recipes = xRecipes.exposeRecipes()

    const titleEle = document.querySelector('#edit-title')
    const stepsEle = document.querySelector('#edit-steps')

    const ingredientsEle = document.createElement('div')
    
    const recipeItem = recipes.find( recipe => recipe.id === recipeId)
    console.log(recipeItem)

    titleEle.value = recipeItem.title
    stepsEle.value = recipeItem.steps
}


export { generateRecipeDOM, renderRecipes, summaryDOM, initializeEditPage }