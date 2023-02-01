import { Component } from "react";
import CounterControl from "./CounterControl";

export default class CounterDisplay extends Component{
    constructor(){
        super();
        this.state = {
            count:0,
            getCounter:(cnt)=>{
                this.setState({count:cnt})
            }
        }
    }
    
    render(){
        return <div>
            <h1>Counter: {this.state.count}</h1>
            <CounterControl cnt={this.state.count} getCnt={this.state.getCounter} />
        </div>
    }
}