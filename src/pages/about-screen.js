import { useContext } from "react"
import ComponentA from "../components/functional components/context/componentA"
import Header from "../components/header/navbar"
import NavBar from "../components/header/navbar"
import { UserDetails } from "../components/navigation/navigation"
import Theme from "../components/functional components/hooks/useStateEX/useStateTheme"
import Flip from "../components/functional components/hooks/useStateEX/cardFlip/cardFlip"
import useCounter from "../components/functional components/hooks/customHook"
import useAxios from "../components/functional components/hooks/customHook/useAxios"

const AboutScreen=()=>{
    let globalInfo=useContext(UserDetails)
    const [data] = useAxios("https://fakestoreapi.com/products/categories")
    // console.log(data);
    // const [count,setCount] = useCounter();

   

    const changeName=()=>{
        globalInfo.changeName()
    }
    return(
        <>
    <Header></Header>

        {/* <h2>AboutScreen</h2>
        <h3>I am from navigation.js, global info {globalInfo.username}</h3>
        <button onClick={changeName }>change name</button>
        <ComponentA></ComponentA> */}
        {/* <Theme></Theme> */}
        {/* <Flip></Flip> */}
{/* <h2>{count}</h2> */}
{/* <button onClick={setCount}>Increment</button> */}
{
    data.length>0
    ?
    data.map(ele=><h2>{ele}</h2>)
    :
    null
}

        </>
    )
}
export default AboutScreen