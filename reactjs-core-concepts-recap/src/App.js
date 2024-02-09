import logo from './logo.svg';
import './App.css';

function App() {
  const about = ['sdhfl', 'ahkdkh', 'hduie', 'ldhfl', 'lieiok']
  const ages = [32];
  const staddy = ['Diploma IN Engineering']
  return (
    <div className="App">
      {
        about.map(about => <Person name={about} age={ages} staddy={staddy}></Person>)
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
      <p>Staddy: {props.staddy}</p>
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
