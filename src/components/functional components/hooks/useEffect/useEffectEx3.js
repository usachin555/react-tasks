import axios from "axios"
import { useEffect, useState } from "react"



const UseEffectEx3=()=>{
    const[count,setCount]=useState(1)

    const [dataa,setData]=useState([])

    useEffect(() => {
     
         fetchData()
 
      },[count]);
    const fetchData = async ()=>{
    const result =await axios.get(`https://dummyjson.com/products/${count}`)
      console.log(result)
      setData(result.data)

    }
    return(
        <>
        <h1>UseEffect</h1>
        <h4>{count}</h4>
        <button  onClick={()=>setCount(count+1)} >Count change</button>
        {
            <h1>{dataa.title}</h1>
        }
        </>
    )
}
export default UseEffectEx3

