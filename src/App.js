
import './App.css';

function App() {
  const age = 14;
  const isBlue = true
  const names = ["Pedro" , "Enes" , "Eray"];
  return (
     <div className='App'>{age>= 18 ? <h1>OverAge</h1> : <h1> Under Age</h1>}
     <h1 style={{ color: isBlue ? "blue": "red"}}>This is A colored TEXT</h1>

     {isBlue && <button className='App'> This is a button</button>}
     
     <h2 className='App'>{names[0]}</h2>
     <h2 className='App'>{names[1]}</h2>
     <h2 className='App'>{names[2]}</h2>
     
     {/* cok daha kisa ve kullanisli */}


     {names.map((name, key)=>{
      return <h1 key={key}> {name }</h1>

     })}
     
     </div>

     

  );
}


export default App;
