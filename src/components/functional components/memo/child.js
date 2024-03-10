import React from "react"

function Child(){
    console.log("child rendering")
    return(
        <>
        child
        </>
    )    
}
export default React.memo(Child)