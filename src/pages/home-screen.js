import { useEffect, useState } from "react";
import axios from "axios"
import "./homeScreen.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom'
import Header from "../components/header/navbar";
 

const HomeScreen=()=>{
        const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                setData(response.data)
            }
        })
        .catch(err=>console.log(err))
    },[])
    return(
        <>
        <Header></Header>
        <div className="obz">
        {
            data.map((eachObject)=>{
                return(
                    <>
                      <CustomCard data={eachObject}/>
                    </>
                )
            })
        }
        </div>
        </>
    )
}
export default HomeScreen

function CustomCard(props) {
    const {data:{image,category,price,description,title,id}}=props
   
  return (

    <Card className="obzz" style={{ width: '20rem', height:'45rem'}}>
      <Card.Img variant="top" src={image} style={{height:"200px"}} width={150}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
       
        <Button style={{backgroundColor:"black"}} color="black" >
            <Link to={`/${category}/${id}`} style={{textDecoration:"none", color:"white"}}>
                Navigate
            </Link>
            </Button>
      </Card.Body>
    </Card>
  );
}

