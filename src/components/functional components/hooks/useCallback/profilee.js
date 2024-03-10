import CustomButton from "./customButton";
import { useCallback, useState } from "react";


const ProfileExample=()=>{
    const [age, setAge] = useState(100);
    const [salary, setSalary] = useState(1000)

    const handleIncrementAge=useCallback(()=>{
        setAge(age+10)
    },[age])

    const handleIncrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
     
    return(
        <>
        <h1>age increase by 10...{age}</h1>
        <h1>salary increase by 1000...{salary}</h1>
        <CustomButton onClick={handleIncrementAge}>Age Increment</CustomButton>
        <CustomButton onClick={handleIncrementSalary}>Salary Increment</CustomButton>

        </>
    )
}
export default ProfileExample