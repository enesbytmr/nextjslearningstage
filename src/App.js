
import './App.css';

function App() {

  return (
  <User name="Enes" age={24} email="enes@enes.com" />
  );
}

const User = (props) => {
return (
  <div>
  <h1>{props.name}</h1>
  <h2>{props.age}</h2>
  <h3>{props.email}</h3>
  </div>
)

}

export default App;
