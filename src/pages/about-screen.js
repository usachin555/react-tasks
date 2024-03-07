import { useContext } from "react"
import ComponentA from "../components/functional components/context/componentA"
import Header from "../components/header/navbar"
import NavBar from "../components/header/navbar"
import { UserDetails } from "../components/navigation/navigation"

const AboutScreen=()=>{
    let globalInfo=useContext(UserDetails)

    const changeName=()=>{
        globalInfo.changeName()
    }
    return(
        <>
    <Header></Header>

        <h2>AboutScreen</h2>
        <h3>I am from navigation.js, global info {globalInfo.username}</h3>
        <button onClick={changeName }>change name</button>
        <ComponentA></ComponentA>
        </>
    )
}
export default AboutScreen