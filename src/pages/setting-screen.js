import { useContext } from "react"
import Header from "../components/header/navbar"
import { UserDetails } from "../components/navigation/navigation"
import Todos from "../components/functional components/hooks/useReducer/useReducerTodo/todo"




const SettingScreen=()=>{
    const globalInfo = useContext(UserDetails)


    return(
        <>
    <Header/>
        {/* <h2>settingScreen {globalInfo.username}</h2> */}
        <Todos></Todos>
        </>
    )
}
export default SettingScreen