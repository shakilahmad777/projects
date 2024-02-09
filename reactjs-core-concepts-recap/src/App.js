import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['sdhfl', 'ahkdkh', 'hduie', 'ldhfl', 'lieiok']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {/* <Person name="Shakl" age="23" stady="diploma in engineering"></Person>
      <Person></Person>
      <Person></Person> */}
      <h2>this is line breck</h2>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className="container">
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Staddy: {props.stady}</p>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="container">
      <h1>Name: Imran hossen Bappy</h1>
      <p>Profession: Computer Engineer, <br/> Full Stack Developer</p>
      <p></p>
    </div>
  )
}

export default App;
