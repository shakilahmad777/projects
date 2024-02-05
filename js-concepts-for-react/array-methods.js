const products = [
    {
        name: 'laptop', price: 55000, brand: 'hp', color: 'darkblue'
    },
    {
        name: 'phone', price: 43000, brand: 'iphone', color: 'navybule'
    },
    {
        name: 'watch', price: 4000, brand: 'casio', color: 'white'
    },
    {
        name : 'sunglass', price: 2300, brand: 'rabon', color: 'black'
    },
    {
        name : 'camera', price: 50000, brand: 'canon', color: 'darkgray'
    }
]

const brands = products.map(product => product.brand);
console.log(brands)

const price = products.map(product => product.price);
console.log(price)

console.table(products)