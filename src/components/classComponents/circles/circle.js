// import { Component } from "react";

// class CircleTask extends Component{
//      state={
//         circles:[]
//     }

//     addCircles=()=>{

//         this.setState(
//             {
//                 circles:[...this.state.circles,false]
//             }
//         )
//     }

//     changecolor = (index) => {
//         console.log(index, this.state.circles)
//       };
      
//     reset=()=>{

//         this.setState(
//             {
//                 circles:[]
//             }
//         )
//     }

     
//     render(){
//         return(
//             <div>
//                  <button onClick={this.addCircles}>click to add circles</button> 
//                  <button onClick={this.reset}>reset</button> 

//                  <h2>total circles -- {this.state.circles.length}</h2>
//                 {
//             this.state.circles.map((eachObject,index) =><Circle isHighlight={eachObject} changecolor={this.changecolor} index={index}></Circle>)
//                 }
               
//             </div>

//         )
//     }
// }
// export default CircleTask
// class Circle extends Component{
//     render(){
//         console.log(this.props.isHighlight)
//         return(
//         <div style={{height:100,width:100,border:"2px solid black",borderRadius:"50%",backGroundColor:this.props.isHighlight?"red":null}} onClick={()=>this.props.changecolor(this.props.index)}>
             
             
//         </div>
//         )
//     }
// }
// // export default Circle

import { useState, useEffect } from "react";

const UseStateExample2 = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // State to keep track of interval ID

  const handleIncrement = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleReset = () => {
    clearInterval(intervalId); // Clear the interval
    setTimer(0);
    setIntervalId(null); // Reset interval ID
  };

  return (
    <>
      <h2>Current timer {timer}</h2>
      <button onClick={handleIncrement}>click to start timer</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

export default UseStateExample2;
