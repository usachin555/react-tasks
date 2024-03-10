import {useState, useMemo } from "react"


const UseMemoEx = ()=>{
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const handleIncrementcounter1 = ()=>{
        setCounter1(counter1+1);
    }

    const handleIncrementcounter2 = ()=>{
        setCounter2(counter2+1);
    }

    const evenChecker = useMemo(()=>{
        console.log("sachin")
        return counter1%2===0 ? "even" : "odd";
    },[counter1])

    return(
        <>
        <h1>counter1....{counter1}</h1>
        <h1>counter2....{counter2}</h1>

<button onClick={handleIncrementcounter1}>increment counter1</button>
<button onClick={handleIncrementcounter2}>increment counter2</button>
<h3>{evenChecker} for counter1</h3>
        </>
    )
}
export default UseMemoEx