import { useState } from "react";


const useXyz = ()=>{
    const [name, setName] = useState(false);


    const handleName = ()=>{
        setName(!name);
        if(!name){
            setName="sachin"
        }
        else{
            setName="rohit";
        }
    }

    return[name, handleName]
}