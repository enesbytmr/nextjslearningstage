import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count +1);

    }
    const decrease = () => {
        setCount(count-1);
    }
    const setToZero = () => {
        setCount(0)
    }
    


    return (
        <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={setToZero}>Set to Zero</button>
        </div>
    );

}