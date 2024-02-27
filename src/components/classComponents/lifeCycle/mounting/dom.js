import { Component } from "react";

class DomManipulation extends Component{
    state={
        counter:10,
        favoritecolor:"red"
    }

    increment=(value)=>{
        this.setState({
            counter:this.state.counter+value
        })
    }
 
    componentDidMount(){
        document.title=this.state.counter
    }
    static getDerivedStateFromProps(props, state){
        return {favoritecolor: props.favcolor};

    }
    
    render(){
        return(
            <div>
                <h1>Dom Manipulation</h1>
                <h3>{this.state.favoritecolor}</h3>
                <h4>{this.state.counter}</h4>
                <button onClick={()=>this.increment(10)}>increment </button>
            </div>
        )
    }
}
export default DomManipulation