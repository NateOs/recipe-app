import uuidv4 from "uuid/v4" 
import Recipe_ from "./recipe"

const dataObject  = {
    'id' : uuidv4(),
    'title' : '',
    'steps' : '',
    'ingredients' : []
}

document.querySelector('#edit-text__title').addEventListener('input',  (e) => {

    dataObject.title = e.target.value
})

document.querySelector('#edit-text__steps').addEventListener('input',  (e) => {
    
    dataObject.steps = e.target.value
})

document.querySelector('#add-ingredient').addEventListener('change', (e) => {

    dataObject.ingredients.push({
       'item' : e.target.value,
       'avail' : false
    })
})

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(dataObject)
})






// console.log(getInput)

// let addRecipe = theRecipe.saveRecipe()
// addRecipe()
// console.log(loaded)

// theRecipe.deleteRecipe('93725e56-26ed-47c2-a357-d522304f628b')

// theRecipe.addRecipe()
