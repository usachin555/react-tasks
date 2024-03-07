import ComponentB from "./componentB"
import { useState } from "react"

function ComponentA(){
    const [name, setName]=useState("shoba")
    return(
        <div>
        <ComponentB name={name}></ComponentB>
        </div>
    )
}

export default ComponentA 