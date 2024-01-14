const numbs = 45;
    // numbs.push(46); Type Error //

const numbers = [34];
    numbers.push(35)
console.log(numbers);
    numbers.pop(35)
console.log(numbers)

let address = {
    city : 'bBaria',
    postCode : 4543,
}
// console.log(address.home.bulding); Type Error //
console.log(address?.home?.bulding);