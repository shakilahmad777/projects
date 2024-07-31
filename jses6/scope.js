// global scope
// local scope
// block scope

// this is global scope

let name = 'shakil';
let isMale = true;

console.log(name, isMale);

//  this is block scope

{
    let roll = 20110;

    console.log(roll)
}
// console.log(roll) // this is not good! this reject.


// this is local scope

function add() {
    const id = 1122;

    console.log(id)
}

add()