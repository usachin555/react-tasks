import { useState } from "react";


const Form = ()=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(username,email)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
                USERNAME:
                <input type="text" placeholder="enter username" value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
                EMAIL:
                <input type="email" placeholder="enter email" value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Form