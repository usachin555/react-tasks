import { useReducer } from "react"

function reducer(state, action){

    // console.log(action,state)
    switch(action.type){
        case "INCREMENT_AGE_BY_10":
            return {...state,age:state.age+10}
        case "DECREMENT_AGE_BY_10":
            return {...state, age:state.age-10}
        case "MULTIPLY_AGE_WITH_2":
            return {...state, age:state.age*0}
        case "CHANGE_NAME":
            return {...state, name:"sachin"}
        default:
            return state    
    }

}
const initialState={
    age:100,
    name:"raju"
}

const UseReducer = ()=>{
   const [currentState, dispatch] = useReducer(reducer, initialState)

   const incrementAge=()=>{
    dispatch(
        {
            type:"INCREMENT_AGE_BY_10"
        }
     )
   }

   const decrementAge=()=>{
    dispatch(
        {
            type:"DECREMENT_AGE_BY_10"
        }
    )
   }

   const multiplyAge=()=>{
    dispatch({
        type:"MULTIPLY_AGE_WITH_2"
    })
   }

    const changeName=()=>{
        dispatch({
            type:"CHANGE_NAME"
        })
    }
    
    return(
        <>
        <h1>UseReducer</h1>
        <h2>{currentState.age}</h2>
        <h2>{currentState.name }</h2>

        <button onClick={incrementAge}>Increment age by 10</button>
        <button onClick={decrementAge}>Decrement age by 10</button>
        <button onClick={multiplyAge}>multiply age by 2</button>
        <button onClick={changeName}>change name</button>
        </>
    )
}

export default UseReducer