// import uuidv4 from "uuid/v4" 

class Recipe_ {
    constructor(id, title, steps, ingredients) {
        this.id = id
        this.title = title
        this.steps = steps
        this.ingredients = ingredients
        this.savedItem = this.loadRecipe()
    } 
    addRecipe() {
        const recipeItem = [{
            'id': this.id,
            'title': this.title,
            'steps':this.steps,
            'ingredients': this.ingredients
            }]
    
        this.loadRecipe() //get from storage
        this.savedItem.push(...recipeItem) //
        this.saveRecipe()

        return recipeItem
    }
    saveRecipe() {
        
        localStorage.setItem('recipes', JSON.stringify(this.savedItem))

        return `Item saved`
    }
    loadRecipe() {
        const recipeJSON = localStorage.getItem('recipes')

        try {
            return recipeJSON ? JSON.parse(recipeJSON) : []
        } catch (e) {
            return []
        } 
    }
    deleteRecipe(id) {
        const savedRecipes = this.loadRecipe()
        const recipeIndex = savedRecipes.findIndex((recipe) => recipe.id === id)

        if (recipeIndex > -1) {
            this.savedItem = savedRecipes.splice(recipeIndex, 1)
            this.saveRecipe()
        }
    }
}

export { Recipe_ as default }