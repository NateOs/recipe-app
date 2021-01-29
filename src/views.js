'use strict'

import { getFilters } from "./filters"
import Recipe_ from "./recipe"

const filters = getFilters()
const xRecipes = new Recipe_()
const recipeId = location.hash.substring('1')
const recipes = xRecipes.exposeRecipes() //accessing all recipe values

//* GenerateRecipeDom
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

    const filteredRecipes = recipes.filter(
        (recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))
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


//* initialize editPage (contains generateIngredientsDom())

const initializeEditPage = (recipeId) => {

    const titleEle = document.querySelector('#edit-title')//element creation
    const stepsEle = document.querySelector('#edit-steps')

    const ingredientsEle = document.querySelector('#ingredients')

    const recipeItem = recipes.find( recipe => recipe.id === recipeId)//finding match

    titleEle.value = recipeItem.title //assigning content
    stepsEle.value = recipeItem.steps

    const ingredients = recipeItem.ingredients //*passed into the generateIngredientsDOM fxn

    ingredients.forEach( (ingredient) => {
        ingredientsEle.appendChild(generateIngredientsDOM(ingredient))
    })
}

//* generate ingredientsDOM
const generateIngredientsDOM = (ingredients) => {//* takes in 1 ingredient to render
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

    //*ingredientButtons
    delBtn.textContent = 'x'
    delBtn.classList.add('ingredientBtn')
    delBtn.dataset.id = ingredients.id

    delBtn.addEventListener('click', (e) => {
        // console.log(e.currentTarget.dataset.id)
        const ingredientId = e.currentTarget.dataset.id

        xRecipes.deleteIngredient(ingredientId, recipeId)
    })

    ingredientText.appendChild(delBtn)
    containerEl.appendChild(ingredientsEle)

    return containerEl

}


export { generateRecipeDOM, renderRecipes, summaryDOM, initializeEditPage }