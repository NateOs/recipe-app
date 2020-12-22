// import uuidv4 from "uuid/v4" 

class Recipe_ {
    constructor(id, title, steps, ingredients) {
        this.id = id
        this.title = title
        this.steps = steps
        this.ingredients = ingredients
        this.savedItem = []
    } 
    addRecipe() {
        const recipeItem = [{
            'id': this.id,
            'title': this.title,
            'steps':this.steps,
            'ingredients': this.ingredients
            }]
    
        this.loadRecipe()
        this.savedItem.push(...recipeItem)
        this.saveRecipe()

        return recipeItem
    }
    saveRecipe() {
        
        localStorage.setItem('recipes', JSON.stringify(this.savedItem))
        console.log(this.savedItem)
        return ` saved`
    }
    loadRecipe() {
        this.savedItem = JSON.parse(localStorage.getItem('recipes'))
        console.log(this.savedItem)
    }
    deleteRecipe(id) {
        this.loadRecipe()
        const recipeIndex = this.savedItem.findIndex((recipe) => recipe.id === id)

        if (recipeIndex > -1) {
            this.savedItem.splice(recipeIndex, 1)
            this.saveRecipe()
        }
        console.log(recipeIndex)
    }
}

export { Recipe_ as default }