'use strict'
import Recipe_ from "./recipe"
import uuidv4 from "uuid/v4"
import { initializeEditPage } from "./views"

const recipeId = location.hash.substring(1) //from objects already created
let theRecipe = new Recipe_()

//*all form entries are assigned on this object
let dataObject  = {
    'id': null,
    'title':'',
    'steps': '',
    'ingredients': []
}

document.querySelector('#edit-title').addEventListener('input',  (e) => {
        dataObject.title = e.target.value
    
})

document.querySelector('#edit-steps').addEventListener('input',  (e) => {
    
        dataObject.steps = e.target.value
})

document.querySelector('#edit-ingredient').addEventListener('input', (e) => {

    if (e.target.value != '') {
        dataObject.ingredients.push({
            'id' : uuidv4(),
            'item' : e.target.value,
            'avail' : false
        })    
    }
})

 //* adding to ingredient list
 // TODO
document.querySelector('#add-ingredientBtn').addEventListener('click', (e) => {
    e.preventDefault()

    const ingredientVal = document.querySelector('#edit-ingredient').value //getting form val

    console.log(ingredientVal)
    
    // if (xRecipes.savedItem !== null) {
    //     this.addIngredient(id, ingredientVal) //id shd be received from hashstring
    //     console.log(xRecipes.savedItem)
    // }
})

//* submitting a recipe (or updating an existing recipe)

document.querySelector('#submitBtn').addEventListener('click', (e) => {
    e.preventDefault()

    const matchedExistItem = theRecipe.savedItem.find( item => item.id === recipeId) //item exists
    const {id, title, steps, ingredients} = dataObject

    if (matchedExistItem === undefined) {//item not found

        if (title && steps !== '') {
            theRecipe = new Recipe_(id, title, steps, ingredients)
            const savedItem = theRecipe.addRecipe()
            console.table(savedItem)
        }
     } else if (matchedExistItem.id === recipeId) {

            const updateObj = {
                'id':recipeId,
                'title': title,
                'steps': steps,
                 'ingredients':ingredients
                }
    console.log(updateObj)
            theRecipe.updateRecipe(recipeId, updateObj)
        } 
})


//TODO Redirect to Homepage after note is deleted
//* delete recipe
document.querySelector('#deleteBtn').addEventListener('click', () => {
    window.open('/index.html') //redirects
    theRecipe.deleteRecipe(recipeId)
})

initializeEditPage(recipeId)
