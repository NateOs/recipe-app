import Recipe_ from "./recipe"

//*all form entries are assigned on this object
const dataObject  = {
    'id': null,
    'title': '',
    'steps': '',
    'ingredients': []
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

 //* adding to ingredient list
 // TODO
// document.querySelector('#add-ingredientBtn').addEventListener('click', (e) => {
//     e.preventDefault()

//     const ingredientVal = document.querySelector('#add-ingredient').value //getting form val

//     //Adding additional ingredient through button
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
        theRecipe.addRecipe() //recipe
    }
    
})

//* delete note
document.querySelector('#deleteBtn').addEventListener('click', (e) => {
    const id = location.hash.substring(1)
    const theRecipe = new Recipe_()
    theRecipe.deleteRecipe(id)
    location.assign('/index.html')
})

