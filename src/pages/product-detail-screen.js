import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


const ProductDetail = ()=>{
    const  routeInformation=useParams()
    console.log(routeInformation, "routeInformation")
    const [product, setProduct]=useState({})
    useEffect(()=>{
// fteching data related to product
fetchData()

    },[routeInformation.id])

const fetchData = ()=>{
    axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
    .then(response=>{
        if(response.status===200){
            setProduct(response.data)
        }
    })
} 

    return(
        <>
        <h3>I am product screen</h3>
        {
            Object.keys(product).length>0
            ?
            <>
            <h3>{product.title}</h3>
            <h3>{product.description}</h3>
            <img src={product.image}/>
            <h3 style={{color:"red"}}>₹{product.price}</h3>
            </>
            :
            console.log("dengey")
        }
        </>
    )
}

export default ProductDetail