import { Routes,Route } from "react-router-dom"



import AboutScreen from "../../pages/about-screen"
import HomeScreen from "../../pages/home-screen"
import InvalidScreen from "../../pages/invalid-screen"
import ProductDetail from "../../pages/product-detail-screen"
import ProfileScreen from "../../pages/profile-screen"
import SettingScreen from "../../pages/setting-screen"


const PostRoute=()=>{
    return(
        <Routes>

            <Route path="/" Component={HomeScreen}/>
            <Route path="/setting" Component={SettingScreen}/>
            <Route path="/about" Component={AboutScreen}/>
            <Route path="/profile" Component={ProfileScreen}/>
            <Route path="*" Component={InvalidScreen}/>
            <Route path="/:category/:id" Component={ProductDetail}/>

        </Routes>
    )
}

export default PostRoute