import { useState } from "react";

 const UseStateExample2 = ()=>{
    const[timer,setTimer]=useState(0)
    const[intervalId, setIntervalId] = useState(null);

    const handleIncrement= ()=>{
        if(!intervalId){
        const id = setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000);
        setIntervalId(id)
    }
    }

    const handleReset=()=>{
        clearInterval(intervalId);
        setTimer(0);
        setIntervalId(null);
    }
    return(
        <>
        <h2>Current timer {timer}</h2>
        <button onClick={handleIncrement}>click to start timer</button>
        <button onClick={handleReset}>reset</button>
        </>   
    )
 }
export default UseStateExample2


