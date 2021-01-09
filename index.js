
// const Math = require("./math/Math.js")
import * as Math from './impos/Math.js'
// import {add,divide} from './math/Math'
import Animal from './impos/animals.js'

console.log(Math.add(2,2))
console.log(Math.divide(5,2))
console.log(Math.mul(50,2))
console.log(Math.subtract(10,2))
console.log(Math.PI);
Math.oops()
var animal = new Animal();
console.log(animal.getClassType())