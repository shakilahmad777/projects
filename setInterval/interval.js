// const startBtn = document.getElementById('start')

// startBtn.addEventListener('click', () => {
//     let num = 0;
//     let intervalId = setInterval(() =>{
//         console.log(num++)
//     }, 1000);

//     document.getElementById('output').innerText = intervalId;
// })


const startBtn = document.getElementById('start');
const outputElement = document.getElementById('output');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset')



let genarateNumber = () => {
  let num = 0;
  setInterval(() => {
    num++;
    displayOutput(num);
  }, 1000);
};

const displayOutput = (num) => {
    outputElement.value = num;
}


// const displayOutputStop = (clear) =>{
//     clearInterval(clear)
//     console.log('ksh')
// }


const displayOutputReset = () =>{
    outputElement.value = '';
}




startBtn.addEventListener('click', genarateNumber)
// stopBtn.addEventListener('click', displayOutputStop)
resetBtn.addEventListener('click', displayOutputReset)


// let count = 0;

// let intervalId = setInterval(() =>{
//     console.log(count++)
// }, 1000)




const genaretNumber = (intervalId) =>{
  let num = 0;
  setInterval(() => {
      num++;
      displayOutput(num);
  }, 1000)
}


let num =0;
const counter = () => {
  num++
}

console.log(counter)