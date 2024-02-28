import { Component } from "react";

class CircleTask extends Component{
     state={
        circles:[]
    }

    addCircles=()=>{

        this.setState(
            {
                circles:[...this.state.circles,false]
            }
        )
    }

    changeColor = (index) => {
        const circles = [...this.state.circles];
        circles[index] =! circles[index]; // Toggle the value
        this.setState({ circles });
      };
      
    reset=()=>{

        this.setState(
            {
                circles:[]
            }
        )
    }

     
    render(){
        return(
            <div>
                 <button onClick={this.addCircles}>click to add circles</button> 
                 <button onClick={this.reset}>reset</button> 

                 <h2>total circles -- {this.state.circles.length}</h2>
                {
            this.state.circles.map((eachObject,index) =><Circle isHighlight={eachObject} changecolor={this.changecolor} index={index}></Circle>)
                }
               
            </div>

        )
    }
}
export default CircleTask
class Circle extends Component{
    render(){
        console.log(this.props.isHighlight)
        return(
        <div style={{height:100,width:100,border:"2px solid black",borderRadius:"50%",backGroundColor:this.props.isHighlight?"black":null}} onClick={()=>this.props.changecolor(this.props.index)}>
             
             
        </div>
        )
    }
}
// export default Circle