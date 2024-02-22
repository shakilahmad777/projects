import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)

const increseCount = () => setCount(count + 1)
const decreseCount = () => setCount(count - 1)
  // const increseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }
  return (
    <div className="">
      <h1>Counter: {count}</h1>
      <button className='increseCount' onClick={increseCount}>Increse</button> 
      <button onClick={decreseCount}>Decrese</button>
    </div>
  );
}



// const products = [
//   {name: 'Laptop', price: '50000', brand: 'hp'},
//   {name: 'Phone', price: '75000', brand: 'Iphone'},
//   {name: 'Watch', price: '22000', brand: 'casio'},
//   {name: 'Tablet', price: '5000', brand: 'assus'},
//   {name: 'SunGlass', price: '2000', brand: 'rabon'}
// ]
// {
//   products.map(product => <Product name={product.name} price={product.price} brand={product.brand}></Product>)
// }

// function Product(props) {
//     return (
//       <div className="container">
//         <h3>Name: {props.name}</h3>
//         <p>Price: {props.price}</p>
//         <h2>Brand: {props.brand}</h2>
//       </div>
//     )
// }

export default App;
