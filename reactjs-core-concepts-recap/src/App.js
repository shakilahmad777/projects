import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  return (
    <div className="App">
      <h2 className="position">Current Situation of my Friends and Me!!!</h2>
      <div className="banar">
      <Friend name="Imran Hossen Bappy" age="23" profession="Computer Engineer, Full Stack Developer"></Friend>
      <Friend name="Mehedi Hassan" age="23" profession="Computer Engineer, Font-end Developer"></Friend>
      <Friend name="Nijam Hosain" age="23" profession="Computer Engineer, Font-end Developer"></Friend>
      <Friend name="Shakil Ahmad" age="23" profession="HTML Engineer"></Friend>
      {/* <Person></Person> */}
      <p>lorem ipsum</p>
      <Products></Products>
      <Person></Person>
      </div>
    </div>
  );
}


function Distric(props) {
  
}

function Person(props) {
  const [power, setPower] = useState(1)
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div className="container">
      <h4>Power {power}</h4>
      <button onClick={boostPower}>Boost the Power</button>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <p>Profession: {props.profession}</p>
      <p></p>
    </div>
  )
}

function Products(props) {
  return (
    <h1>heohaldhi</h1>
  )
}

export default App;
