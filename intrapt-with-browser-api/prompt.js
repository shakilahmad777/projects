// alert('welcome to page')

const showAlert = () => {
    alert('dosto tk ase? dhar dite parbi, just 1000?')
}

const handleMoney = () => {
    const result = confirm('Taka dhar dibi 500?')
    console.log(result)
    if(result === true) {
        console.log('tui amar janer dosto!!!')
    }
    else {
        console.log('DGM..... tole ajke block marmu')
    }
}

const getInfo = () => {
    // alert
    // confirm 
    const name = prompt("What's your Name?")
    console.log(name)
}