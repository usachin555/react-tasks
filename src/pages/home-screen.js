import { useEffect, useState } from "react";
import axios from "axios"
import "./homeScreen.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom'
import Header from "../components/header/navbar";
import useAxios from "../components/functional components/hooks/customHook/useAxios";
 

const HomeScreen=()=>{
    const [data] = useAxios("https://fakestoreapi.com/products")
    const [day, setDay] = useState(null);

    useEffect(()=>{
        console.log(getGreeting());
        setDay(getGreeting())

    },[])
function getToday(){
    let day = ""   
    switch(new Date().getDay()){
        case 0:
            day="Sunday"
            break;
        case 1:
            day="Monday"
            break;
        case 2:
            day="Tuesday"
            break;
         case 3:
            day="wednesday"
            break;
        case 4:
            day="thursday"
            break;
        case 5:
            day="fridaay"
            break;
        default:
            day=null;
    }
    return day
}

function getGreeting(){
    const timeInHours=new Date().getHours();
    let greeting;
    if(timeInHours>6 && timeInHours < 11){
        greeting="GOOD-mORNING brooo have a nice day "
    }
    else if(timeInHours>=11 && timeInHours < 16){
        greeting="GOOD AFTERNOON";
    }
    else if(timeInHours>=16 && timeInHours < 18){
        greeting="GOOD EVENING";
    }
    else{
        greeting="good night";
    }
    return greeting;
}

    //     const [data,setData]=useState([]);

    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products")
    //     .then(response=>{
    //         if(response.status===200){
    //             setData(response.data)
    //         }
    //     })
    //     .catch(err=>console.log(err))
    // },[])
    return(
        <>
        <Header></Header>
        <div className="obz">
            <h1>{day}</h1>
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
        
       <div className="buton">
       <Button style={{backgroundColor:"black"}} color="black" >
            <Link to={`/${category}/${id}`} style={{textDecoration:"none", color:"white"}}>
                Navigate
            </Link>
            </Button>
       </div>
        
      </Card.Body>
    </Card>
  );
}

