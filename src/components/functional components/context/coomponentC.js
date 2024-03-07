import ComponentD from "./componentD"

function ComponentC({name}){
    return(
        <div>
            <h2>hello</h2>
            <ComponentD name={name}/>
            <h5>hey</h5>

        </div>
    )
}
export default ComponentC