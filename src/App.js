import './App.css';
import { Planet } from './Planet';


function App() {
  const planets =[
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ]
  return (
     <div className='App'>
      <h1 className='red'>Gas Planets</h1>
      {planets.map((planet, key)=>{
        return <Planet name={planet.name} isGasPlanet={planet.isGasPlanet}/>
      })}
    
     </div>

     

  );
}


export default App;
