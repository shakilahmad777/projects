function isBigger(num) {
    if(num > 6) {
        return true; 
    }else{
        return false;
     }
}
// } Syntex Error { {,} } //


const result = isBigger(1);

console.log(result)

// const sum = a, b => a+b; Syntex Error { (,) } //
const sum = (a, b) => a+b;
console.log(sum(1,4));

const obj = {
    name : 'shakil',
    // age : 23 Syntex Error {,} //
    age : 23, 
    job : 'tesla'
}

console.log(obj.job);

// const number = [1,2,3,4 5 6,] Syntex Error //

