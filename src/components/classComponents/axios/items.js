import { Component } from "react";
import axios from "axios";

class Items extends Component{
    constructor(){
        super();
       this.state = {
        ite: []
       };
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                this.setState({
                    ite:response.data
                })
            }
            else
            {
                alert("something went wrong")
            }
        })
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <div>
                {
                    this.state.ite.length>0 ?
                    this.state.ite.map(eachObject=><h2 key={eachObject.id}>{eachObject.title}</h2>)
                    :
                    <h4>no products found</h4>
                }
            </div>
        )
    }
}
export default Items;