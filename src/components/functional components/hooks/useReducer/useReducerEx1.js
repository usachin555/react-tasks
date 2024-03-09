import { useReducer } from "react"

function reducer(state, action){
    switch(action.type){
        case "salary_increment_by_100":
            return {...state, salary:state.salary+100}
            case "salary_decrement_by_100":
                return {...state, salary:state.salary-100}
                case "change_name":
                    return {...state, name:"sachin"}
            default:
                return state
    }
}

const initialState = {
    name:"tanvi",
    designation:"dataAnalyst",
    salary:35000
}

const UseReduccer = ()=>{
   const [currentState, dispatch] = useReducer(reducer, initialState)

   return(
    <>
        <h1>{currentState.salary}</h1>
        <h1>{currentState.name}</h1>

        <button onClick={()=>{dispatch({type:"salary_increment_by_100"})}}>salary increment by 100</button>
        <button onClick={()=>{dispatch({type:"salary_decrement_by_100"})}}>salary decrement by 100</button>    
        <button onClick={()=>{dispatch({type:"change_name"})}}>change the name</button>    

    </>
   )
}

export default UseReduccer