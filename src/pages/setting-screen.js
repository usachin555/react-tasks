import { useContext } from "react"
import Header from "../components/header/navbar"
import { UserDetails } from "../components/navigation/navigation"


import Todos from "../components/functional components/hooks/useReducer/useReducerTodo/todo"
import UseMemoEx from "../components/functional components/hooks/useMemo/useMemo"
import ParentMemo from "../components/functional components/memo/parent"
import ProfileExample from "../components/functional components/hooks/useCallback/profilee"
import SignIn from "../components/functional components/hooks/useStateEX/useStateEx1/SignIn"
import Form from "../components/functional components/hooks/useStateEX/formEx"
import useCounter from "../components/functional components/hooks/customHook"




const SettingScreen=()=>{
    const globalInfo = useContext(UserDetails)
    const [count, setCount] = useCounter()



    return(
        <>
    <Header/>
        {/* <h2>settingScreen {globalInfo.username}</h2> */}
        {/* <Todos></Todos> */}
        {/* <UseMemoEx></UseMemoEx> */}
        {/* <ParentMemo></ParentMemo> */}
        {/* <ProfileExample></ProfileExample> */}
        {/* <SignIn></SignIn> */}
        {/* <Form></Form> */}
        <h4>{count}</h4>
        <button onClick={setCount}>Increment</button>
        
        </>
    )
}
export default SettingScreen