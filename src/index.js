//Webpack enables a module system, a better way to structure your applications for 
//performance and compatibility
// import './utilities.js'
import { add, name } from './utilities'
import { scream } from './scream'

console.log('index.js')
console.log(add(2,1))
console.log(name)

console.log(scream('Nathan'))