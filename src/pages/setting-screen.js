import { useContext } from "react"
import Header from "../components/header/navbar"
import { UserDetails } from "../components/navigation/navigation"


import Todos from "../components/functional components/hooks/useReducer/useReducerTodo/todo"
import UseMemoEx from "../components/functional components/hooks/useMemo/useMemo"
import ParentMemo from "../components/functional components/memo/parent"
import ProfileExample from "../components/functional components/hooks/useCallback/profilee"




const SettingScreen=()=>{
    const globalInfo = useContext(UserDetails)


    return(
        <>
    <Header/>
        {/* <h2>settingScreen {globalInfo.username}</h2> */}
        {/* <Todos></Todos> */}
        {/* <UseMemoEx></UseMemoEx> */}
        {/* <ParentMemo></ParentMemo> */}
        <ProfileExample></ProfileExample>
        </>
    )
}
export default SettingScreen