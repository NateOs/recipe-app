import Recipe from "./recipe"

const newRecipe = new Recipe('Banku',
                            '1. Mix Doughs, 2. Add salt and water to taste, 3. Stir on heat to cook thickness.',
                            [{'name': 'Cassava Dough',
                            'have': false},
                            {'name': 'Corn Dough',
                            'have': true}])
const ret = (newRecipe.addRecipe())
console.log(ret)