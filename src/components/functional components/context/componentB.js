import ComponentC from "./coomponentC"

function ComponentB({name}){
    return(
        <div>
            <h2>hello</h2>
            <ComponentC name={name}/>
            <h5>hey</h5>
        </div>
    )
}
export default ComponentB