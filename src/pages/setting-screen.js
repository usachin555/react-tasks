import { useContext } from "react"
import Header from "../components/header/navbar"
import { UserDetails } from "../components/navigation/navigation"




const SettingScreen=()=>{
    const userInfo = useContext(UserDetails)


    return(
        <>
    <Header/>
        <h2>settingScreen {userInfo.username}</h2>
        </>
    )
}
export default SettingScreen