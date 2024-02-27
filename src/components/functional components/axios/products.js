import axios from "axios"


const ProductsApi = ()=>{
    const fetchData = ()=>{
axios.get("https://fakestoreapi.com/products")
.then(response=>console.log(response))
.catch(err=>console.log(err))
    }
    return(
        <>
<button onClick={fetchData}>fetch data</button>

        </>
    )
}
export default ProductsApi