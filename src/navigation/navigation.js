import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/home-screen"
import SettingScreen from "../pages/setting-screen"
import ProfileScreen from "../pages/profile-screen"
import AboutScreen from "../pages/about-screen"
import InvalidScreen from "../pages/invalid-screen"

 const NavigationStack = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" Component={HomeScreen}/>
                    <Route path="/setting" Component={SettingScreen}/>
                    <Route path="/about" Component={AboutScreen}/>
                    <Route path="/profile" Component={ProfileScreen}/>
                    <Route path="*" Component={InvalidScreen}/>
            </Routes>
        </BrowserRouter>
    )
 }
 export default NavigationStack