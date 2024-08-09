const number = [1,4,5,76,45,43,6,0]
const number2 = [3,64,34,23,44,65,]

console.log(Math.min(number))
console.log(Math.min(...number))

// const newArray = [32,43,546,23, number2] wrong waye!!!
const newArray = [32,43,546,23, ...number2] // right 

console.log(newArray)

// console.log(...number, ...number2)