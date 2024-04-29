const loadCountires = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountires(data))
}


const displayCountires = countires =>{
    console.log(countires[0])
    const countiresHTML = countires.map(country => getCountiresHTML(country)) 
    // const counterHTML = countires.map(country => displayCounter(country))
    const counterHTML = countires.map(country => country)
    const counterNumber = counterHTML.length
    // console.log(counterHTML)
    // console.log(countiresHTML)
    const counterDisplay = document.getElementById('country-count');
    counterDisplay.innerHTML = counterNumber;

    const container = document.getElementById('countires')
    container.innerHTML = countiresHTML.join(' ')
} 

// const displayCounter = counter => {
//     return `
//         ${counter.length}
//     `
// }

const getCountiresHTML = ({name, flags, continents, area}) => {
    // const {name, flags} = country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Containet : ${continents}</p>
            <p>Area : ${area}</p>
            <img src="${flags.png}"/>
        </div>
    `
}

loadCountires()