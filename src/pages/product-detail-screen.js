import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Header from "../components/header/navbar"


const ProductDetail = ()=>{
    const  routeInformation=useParams()
    console.log(routeInformation, "routeInformation")
    const [product, setProduct]=useState({})
    useEffect(()=>{
// fteching data related to product
fetchData()

    },[routeInformation.id])
    console.log(routeInformation, "routeInformation")

const fetchData = ()=>{
    axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
    .then(response=>{
        if(response.status===200){
            setProduct(response.data)
        }
    })
} 
<Header></Header>

    return(
        <>
        <Header></Header>
        <h3>I am product screen</h3>
        {
            Object.keys(product).length>0
            ?
            <>
            <h3>Title: {product.title}</h3>
            <h3>Description: {product.description}</h3>
            <img src={product.image} style={{width:200}} height={200}/>
            <h3 style={{color:"red"}}>₹ {product.price}</h3>
            </>
            :
            console.log("not found")
        }
        </>
    )
}

export default ProductDetail