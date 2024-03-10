import { useState } from "react";
import Child from "./child";

function ParentMemo(){
    const [counter, setCounter] = useState(0)

    return(
        <>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>counter Increment</button>
        <Child></Child>
        </>
    )
}
export default ParentMemo