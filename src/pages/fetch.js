import "../App.css"
import { useState, useEffect} from "react";
import Axios from "axios"


function Fetch () {
const [catFact, setCatFact] = useState(""); 

const fetchCatFact = () =>{
    Axios.get("https://catfact.ninja/fact").then((res)=> {
        if(res.status === 200){
            setCatFact(res.data.fact)
        }else{
            console.log("err")
        }
    })
}

useEffect(() =>{
       fetchCatFact();
}, [])

const [name, setName] = useState('')
const [age, setAge] = useState(0)
const fetchName = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        console.log(res)
         setAge(res.data.age)})
}


    return (
        <div className="App">
            <div className="container">
            <h1>Fact About Cat</h1>
            <button onClick={fetchCatFact}>Generate Cat Fact </button>
            <p>{catFact}</p>
            </div>
        <hr />
        <div>
            <h1>Find Your Age</h1>
            <input type="text" placeholder="Name Here ..." onChange={(event)=>{setName(event.target.value)}} />
            <button onClick={fetchName}>Submit</button>
            <p>Your estimated age</p>
            <p>{age}</p>
        </div>

        </div>
    )
}

export default Fetch;