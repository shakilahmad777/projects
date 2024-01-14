// const startBtn = document.getElementById('start');
// const outputElement = document.getElementById('output');
// const stopBtn = document.getElementById('stop');
// const resetBtn = document.getElementById('reset');


// const genaretNumber = (nItervalId) =>{
//     let num = 0;
//     nItervalId = setInterval(() => {
//         num++;
//         displayOutput(num);
//     }, 1000)
// }

// const displayOutput = (num) => {
//     outputElement.value = num;
// }

// startBtn.addEventListener('click', genaretNumber)
// // -------------

// const displayOutputStop = (nItervalId) => {
//     clearInterval(nItervalId)
//     console.log('jdhfk')
// }

// stopBtn.addEventListener('click', displayOutputStop)
// // -------------

// const displayOutputReset = () => {
//     outputElement.value = '';
// }


// resetBtn.addEventListener('click', displayOutputReset)




// let num =0;
// const counter = () => {
//   setInterval()
//   console.log('lshfks')
// }

// let result = counter();
// console.log(result)

let num =0;
let intervalId = setInterval(() =>{
    num++;
}, 1000)


console.log(intervalId);