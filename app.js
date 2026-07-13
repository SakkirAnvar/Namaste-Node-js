// by using require we cant access variables and functions
//require("./xyz")
// const {calculatesum, x} = require("./calculate/sum")

const {calculateSum, calculateMultiply} = require("./calculate")

const name = "Namaste Node JS"
var a = 20
var b = 10

calculateSum(a, b)
calculateMultiply(a,b)

//console.log(x);





