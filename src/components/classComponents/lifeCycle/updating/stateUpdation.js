import { Component } from "react";

class UpdatingPhase extends Component{
    state={
        count:0
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidUpdate(){
        console.log("component did update")
    }
    shouldComponentUpdate(){
        return true
    }

    static getDerivedFromProps(props, state){
        console.log("dfghjkjhgfgh");
    }


    render(){
        console.log("render");
        console.log("render");
        return(
            <>
            <h2>hello</h2>
            <button onClick={this.increment}>increment by 1{this.state.count+1}</button>
            </>
        )
    }
}
export default UpdatingPhase