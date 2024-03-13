import { useState } from "react"


const useCounter = ()=>{
    const [count, setCount] = useState(0)

    const handleCount=()=>{
        setCount(count+1)
    }

    return[count, handleCount]
}
export default useCounter;