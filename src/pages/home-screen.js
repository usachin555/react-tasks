import { useEffect, useState } from "react";
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom'
 

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
        <h2>HomeScreen</h2>
        {
            data.map((eachObject)=>{
                return(
                    <>
                      <CustomCard data={eachObject}/>
                    </>
                )
            })
        }
        </>
    )
}
export default HomeScreen



function CustomCard(props) {
    const {data:{image,category,price,description,title,id}}=props
   
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{height:"200px"}} width={200}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
       
        <Button>
            <Link to={`/${category}/${id}`} >
                Navigate
            </Link>
            </Button>
      </Card.Body>
    </Card>
  );
}

