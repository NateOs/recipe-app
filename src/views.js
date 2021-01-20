'use strict'

import Recipe_ from "./recipe"
import { getFilters } from "./filters"

const filters = getFilters()
const xRecipes = new Recipe_()

const recipes = xRecipes.exposeRecipes() //accessing all recipe values

// const testItems = xRecipes.toggleIngredient('0d755e92-8a8e-4b2f-a13f-97277e73234b')

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

    const titleEle = document.querySelector('#edit-title')//element creation
    const stepsEle = document.querySelector('#edit-steps')

    const ingredientsEle = document.querySelector('#ingredients')
    const ingredientListItem = document.createElement('p')

    const recipeItem = recipes.find( recipe => recipe.id === recipeId)//finding match
    console.log(recipeItem)

    titleEle.value = recipeItem.title //assigning content
    stepsEle.value = recipeItem.steps

    

    const ingredients = recipeItem.ingredients //* this can be passed into the generateIngredientsDOM fxn
    console.log(ingredients)
    //* generateIngredientsDOM to be called here
    ingredients.forEach( () => {
        ingredientsEle.appendChild(generateIngredientsDOM(ingredients))
    })

}

const generateIngredientsDOM = (ingredients) => {// ingredients shd be an array
    const ingredientsEle = document.createElement('label')
    const ingredientText = document.createElement('p')
    const checkbox = document.createElement('input')
    const delBtn = document.createElement('button')
    const containerEl = document.createElement('div')

    ingredientText.textContent = ingredients.item
    ingredientsEle.appendChild(ingredientText)

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = ingredients.avail
    ingredientText.appendChild(checkbox)

    delBtn.textContent = 'Remove'
    delBtn.addEventListener('click', () => {
        // xRecipes.deleteIngredient(ingredients.id) //todo write this function

    })

    ingredientText.appendChild(delBtn)

    containerEl.appendChild(ingredientsEle)

    return containerEl
}






export { generateRecipeDOM, renderRecipes, summaryDOM, initializeEditPage }