import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <Person name="Shakil Ahmad" age="23" profession="Engenneare"></Person>
      <Person name="Shakil Ahmad" age="23" profession="Engenneare"></Person>
      <Person name="Shakil Ahmad" age="23" profession="Engenneare"></Person>
    </div>
  )
}

function Person(props){
  return <div className="about">
    {/* <h1>Hello my React</h1>
    <p>On GO...</p> */}
    <h2>Name : {props.name}</h2>
    <p>Age : {props.age}</p>
    <p>Profession : {props.profession}</p>
  </div>
}
export default App
