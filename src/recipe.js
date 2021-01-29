'use strict'

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
      
            if (typeof recipeItem.title === 'string') {
                this.loadRecipe() //get from storage
                this.savedItem.push(recipeItem) //
                this.saveRecipe()
            }
            return recipeItem
    }
    
    updateRecipe(RecipeId, updateObject) {
        const matchedExistItem = this.savedItem.find( item => item.id === RecipeId)
        const matchedExistItemIndex = this.savedItem.findIndex( item => item.id === RecipeId)
        
        if (updateObject.title === '') { //reload items nulled by dataObject
            updateObject.title = matchedExistItem.title
        }
        
        if (updateObject.steps === '') {//reload items nulled by dataObject
            updateObject.steps = matchedExistItem.steps
        }

        if (matchedExistItem.id === updateObject.id) { //see if contents are the same
            this.savedItem.splice(matchedExistItemIndex, 1, updateObject)
            this.saveRecipe()
        } else {
            this.savedItem.push(updateObject)
            this.saveRecipe()
        }

        console.log(updateObject)

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
        if (recipeIndex > -1) {
            const recipes = this.savedItem

            recipes.splice(recipeIndex, 1)
            this.savedItem = recipes
            this.saveRecipe()
        window.location.assign('index.html')
        }
    }
   
    //*make recipe object available
    exposeRecipes () {
        return this.savedItem
    }

    //*
    exposeRecipeById (recipeId) {
        const recipes = this.savedItem
        console.log(recipes)
    }

    // todo ////////////////////////////////////////////////////////////////////////
    // todo /////////////////////////////////////////////////////////////////////////

     //*Allows to add new ingredient through button
     addIngredient(id, ingredient) {
        const recipes = this.savedItem

        const recipe = recipes.find((recipe) => recipe.id === id)
    
        recipe.ingredients.push(ingredient)
        this.saveRecipe()
   
    }
    //todo test this function
     //* delete ingredient
     deleteIngredient(ingredientId, recipeId) {
        const recipe = this.savedItem.find( recipeItem => recipeItem.id === recipeId)
        const ingredients = recipe.ingredients
        const ingredientIndex = ingredients.findIndex(ingredient => ingredient.id === ingredientId)
        
        if (ingredientIndex > -1) {
            recipe.ingredients.splice(ingredientIndex, 1)
            this.savedItem = recipe
            this.saveRecipe()
        }
        console.log(recipe)
    }

     // //todo find ingredientsByID
    // //* expose ingredients on recipeItem
    // //* expose ingredients with recipeid, pick off ingredients to edit 
    exposeIngredients (recipeId) {
        const recipes = this.savedItem
        const recipe = recipes.find( recipe => recipe.id === recipeId )
        console.log(recipe)
        const ingredients = recipe.ingredients
        return ingredients
    }

    //*toggle ingredient availability

    //find item that matches id
    //return item
    //get .ingredients of item
    // todo use recipe.ingredients.id to toggle available ingredients
    // find ingredient

    //todo rewrite this!
    //set avail to true when checkbox change is true
    // toggleIngredient (ingredientId) {
    //     const ingredient = items.find( items => ingredient.id === ingredientId)
    //     if (typeof ingredient !== undefined) {
    //         const matchedIngredient = ingredient.find( ingredient => recipe.id === id)
    //         const ingredients = matchedRecipe.ingredients
    //         ingredients.find

    //         console.log(ingredients)
    //     }
    //     console.log(typeof recipes)
        
    // }

}

export { Recipe_ as default }