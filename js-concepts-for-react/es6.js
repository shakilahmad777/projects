const numbers = [54, 46, 64, 76, 78, 45]

const student = {
    name: 'Shakil',
    age: 23,
    movies: ['king khan', 'dhaka atack']
}

// 1. template string
const about = `My Name is ${student.name} age of ${student.age} also liked movies ${student.movies[0]} per month income ${numbers[1]}k`

console.log(about)

// 2. arrow function
const getFiftyFive = () => 43;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
} 

// 3. spread operator

const newAddNumber = [...numbers];
newAddNumber.push(99);

const currentNumber = [...numbers, 77]

console.log(numbers)
console.log(newAddNumber)
console.log(currentNumber)