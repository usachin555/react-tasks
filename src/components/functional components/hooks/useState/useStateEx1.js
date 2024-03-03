import {useState} from "react"
const UseStateExample = ()=>{

    const[currentCount, setCurrentCount]=useState(0)

    const handleIncrement=(value)=>{
        console.log(currentCount)

        setCurrentCount(currentCount+value)
    }

    const handleDecrement=(value)=>{

        setCurrentCount(currentCount-1)
    }

    const reset=()=>{

        setCurrentCount(0)
    }
    return(
        <>
        <h1>{currentCount}</h1>
        <button onClick={()=>handleIncrement(2 )}>increment</button>
        <button onClick={()=>handleDecrement(1)}>decrement</button>
        <button onClick={reset}>reset</button>

        </>
    )
}

export default UseStateExample