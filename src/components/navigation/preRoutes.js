import { Route, Routes } from "react-router-dom"
import Loginn from "../functional components/form/registrationForm/login"
import Registration from "../functional components/form/registrationForm/registration"

const PreRoute=()=>{
    return(
        <Routes>
            <Route path="/" Component={Registration}></Route>
            <Route path="/login" Component={Loginn}></Route>

        </Routes>
    )
}
export default PreRoute