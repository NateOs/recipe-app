'use strict'
import Recipe_ from "./recipe"
import uuidv4 from "uuid/v4"
import { initializeEditPage } from "./views"

const recipeId = location.hash.substring(1)

//*all form entries are assigned on this object
const dataObject  = {
    'id': null,
    'title': '',
    'steps': '',
    'ingredients': []
}

document.querySelector('#edit-title').addEventListener('input',  (e) => {

    dataObject.title = e.target.value
})

document.querySelector('#edit-steps').addEventListener('input',  (e) => {
    
    dataObject.steps = e.target.value
})

document.querySelector('#edit-ingredient').addEventListener('change', (e) => {

    dataObject.ingredients.push({
        'id' : uuidv4(),
        'item' : e.target.value,
        'avail' : false
    })
})

 //* adding to ingredient list
 // TODO
// document.querySelector('#add-ingredientBtn').addEventListener('click', (e) => {
//     e.preventDefault()

//     const ingredientVal = document.querySelector('#add-ingredient').value //getting form val

    //Adding additional ingredient through button
//     const xRecipes = new Recipe_()

//     if (xRecipes.savedItem !== null) {
//         this.addIngredient(id, ingredientVal) //id shd be received from hashstring
//         console.log(xRecipes.savedItem)
//     }
// })

//* submitting a recipe
document.querySelector('#submitBtn').addEventListener('click', (e) => {
    e.preventDefault()

    const {id, title, steps, ingredients} = dataObject
    if (title && steps !== '') {
        const theRecipe = new Recipe_(id, title, steps, ingredients)
        theRecipe.addRecipe() 
    }
    
})

//TODO Redirect to Homepage after note is deleted
//* delete recipe
document.querySelector('#deleteBtn').addEventListener('click', () => {
    const id = location.hash.substring(1)
    const theRecipe = new Recipe_()
    theRecipe.deleteRecipe(id)
    // location.assign('/index.html')
    window.open('/index.html')
})

initializeEditPage(recipeId)




