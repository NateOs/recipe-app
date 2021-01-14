import uuidv4 from "uuid/v4"

class Recipe_ { 
    //*class definition
    constructor(id, title, steps, ingredients) {
        this.id = id
        this.title = title
        this.steps = steps
        this.ingredients = ingredients
        this.savedItem = this.loadRecipe()
    }
    //*add a new recipe and save
    addRecipe() {
        const recipeItem = {
            'id': uuidv4(),
            'title': this.title,
            'steps':this.steps,
            'ingredients': this.ingredients
            }
        
            // todo Test this again!
            if (typeof recipeItem.title === 'string') {
                
                this.loadRecipe() //get from storage
                this.savedItem.push(recipeItem) //
                this.saveRecipe()
            }
            return recipeItem.id
    }
    //*updates the recipe without creation of new uuid
    updateRecipe(id) {
        // TODO Finish function
    }
     //*Allows to add new ingredient through button
    addIngredient(id, ingredient) {
        const recipes = this.savedItem

        const recipe = recipes.find((recipe) => recipe.id === id)
    
        recipe.ingredients.push(ingredient)
        this.saveRecipe()
   
    }
    //*saveRecipe to localstorage
    saveRecipe() {
        
        localStorage.setItem('recipes', JSON.stringify(this.savedItem))
        return `Item saved`
    }
    //*get recipe from localstorage
    loadRecipe() {
        const recipeJSON = localStorage.getItem('recipes')

        try {
            return recipeJSON ? JSON.parse(recipeJSON) : []
        } catch (e) {
            return []
        } 
    }
    //*delete a recipe
    deleteRecipe(id) {
        const savedRecipes = this.loadRecipe()
        const recipeIndex = savedRecipes.findIndex((recipe) => recipe.id === id)

        console.log(recipeIndex)
        if (recipeIndex > -1) {
            const recipes = this.savedItem

            recipes.splice(recipeIndex, 1)
            this.savedItem = recipes
            this.saveRecipe()
        location.assign('/index.html')
        }
    }
    //*make recipe object available
    exposeRecipes () {
        return this.savedItem
    }
}

export { Recipe_ as default }