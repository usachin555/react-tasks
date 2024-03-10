import { useState } from "react"



const SignIn = ()=>{
    const [signedin, setSignedin] = useState(false)
    const handleSignout=()=>{
        setSignedin(false)
    }

    const handleSignin=()=>{
        setSignedin(true)
    }


    return(
        <div>
            {
                signedin ? (
                    <div>
                        <button onClick={handleSignout}>signout</button>
                        <p>Welcome back, Good to see here buddy</p>
                    </div>
                )
                :
                (
                    <div>
                        <button onClick={handleSignin}>signin</button>
                        <p>Please, Sign in bro Please</p>
                    </div>
                )

            }
        </div>
    )
}
export default SignIn