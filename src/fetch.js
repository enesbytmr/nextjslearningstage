import "./App.css"
import { useState, useEffect} from "react";
import Axios from "axios"


function Fetch () {
const [catFact, setCatFact] = useState(""); 
//bu sekilde kullanirsak sonsuz istek atiyor ancak useeffect ile kullanirsak tek aticak mounting surecinde

useEffect(() =>{
    Axios.get("https://catfact.ninja/fact").then((res)=> {
        if(res.status === 200){
            setCatFact(res.data.fact)
        }else{
            console.log("err")
        }

    })
}, [])

   


    return (
        <div className="App">
            <button>Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    )
}

export default Fetch;