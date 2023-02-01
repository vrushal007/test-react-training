import React , {Component} from "react";
export default class CounterControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }
    }
    inc = async() =>{
        console.log("pre increment",this.state.value)
        await this.setState({value:this.state.value + 1})
        console.log("post increment",this.state.value)
        this.props.getCnt(this.state.value + 1)
    }
    dec = () =>{
        console.log("pre decrement",this.state.value);
        this.setState({value:this.state.value - 1});
        console.log("post decrement",this.state.value);
        this.props.getCnt(this.state.value - 1);
    }
    render(){
        return <div>
            <button onClick={this.inc}>+</button>
            <button onClick={this.dec}>-</button>
        </div>
    }
}