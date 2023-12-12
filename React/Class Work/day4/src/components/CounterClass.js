import React,{Component,useState} from 'react';
export default class Counterclass extends Component{
    constructor(props){
        super(props)
        this.state={
            Count:0
        }
    }
    increment=()=>{
        this.setState({Count:this.count+1})

    }
    decrement=()=>{
        this.setState({Count:this.count-1})
    }
render(){
    return(
        <div>
            <button onClick={this.increment}>Increment</button>
            <h5>Count:{this.state.count}</h5>
            <button onClick={this.decrement}>decrement</button>
        </div>
    )
}
}
