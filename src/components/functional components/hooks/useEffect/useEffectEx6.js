import { useEffect, useState } from "react"

export default function WidthEx(){
const [windowWidth, setwindowWidth] = useState(window.innerWidth)

const handleResize=()=>{
    setwindowWidth(window.innerWidth)
}
useEffect(()=>{
window.addEventListener('resize', handleResize)
},[])
    return(
        <div>{windowWidth}</div>
    )
}