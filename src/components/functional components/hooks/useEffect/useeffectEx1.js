import { useEffect, useState} from "react";



export default function Resource() {
    const [resourceType, setResourceType]=useState('posts')
const [item, setItem]=useState([]);

console.log("render")
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response=>response.json())
        .then(json=>setItem(json))
    },[resourceType])

    return(

<>
<div>
    <button onClick={()=>{setResourceType('posts')}}>Posts</button>
    <button onClick={()=>{setResourceType('users')}}>users</button>
    <button onClick={()=>{setResourceType('comments')}}>comments</button>
</div>
<h1>{resourceType}</h1>
{item.map(item=>{return <pre>{JSON.stringify(item)}</pre>})}
</>
    )
}