import uuidv4 from "uuid/v4" 

class Recipe {
    constructor(title, steps, ingredients) {
        this.title = title
        this.steps = steps
        this.ingredients = ingredients
    } 
    saveRecipe() {
        let recipeItem = [{
            'id': uuidv4(),
            'title': this.title,
            'steps':this.steps,
            'ingredients': this.ingredients
                            }]
        localStorage.setItem('recipes', JSON.stringify(recipeItem))

        return recipeItem
    }
    deleteRecipe() {
        // let Recipe = [{
        //     'title':this.title,
        //     'steps':this.steps,
        //     'ingredients': this.ingredients
        // }]
        // let recipeItem = [{
        //     'title':'Banku',
        //     'steps':'1. Mix Doughs, 2. Add salt and water to taste, 3. Stir on heat to cook thickness.',
        //     'ingredients': [{'name': 'Cassava Dough',
        //                     'have': false},
        //                     {'name': 'Corn Dough',
        //                     'have': true}]
        //             }] //Example Array

        return `I am a method`
    }
}

export { Recipe as default }