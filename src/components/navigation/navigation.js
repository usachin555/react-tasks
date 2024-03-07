import { BrowserRouter } from "react-router-dom"
import PostRoute from "./postRoutes"
import PreRoute from "./preRoutes"
import { createContext, useState } from "react"


export const UserDetails=createContext()

const NavigationStack = ()=>{
    const [username ,setUserName]=useState("don")
 
const changeName = ()=>{
    setUserName("he y dude")
}

    return(
        <BrowserRouter>

        <UserDetails.Provider value={{
            username,
            changeName 
        }}>
        {
            true
            ?
            <PostRoute></PostRoute>
            :
            <PreRoute></PreRoute>

        }
        </UserDetails.Provider>
        </BrowserRouter>
    )
}
export default NavigationStack