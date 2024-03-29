import './App.css';
import { Planet } from './pages/Planet';
import { useState } from "react"
import { Counter } from './pages/Counter'
function App() {
  const planets =[
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ]
  const [age, setAge] = useState(50)
  const increaseAge = () => {
 
      setAge(age+1)

  }

  return (
     <div className='App'>
      <h1 className='red'>Gas Planets</h1>

      {planets.map((planet, key)=>{
        return <Planet name={planet.name} isGasPlanet={planet.isGasPlanet}/>
      })}
    <hr />
      <h1>{age}</h1>
      <button onClick={increaseAge}>Hello</button>
      <hr />
      <Counter/>
      <hr />

     </div>

     

  );
}


export default App;
