import React, {Component} from 'react';
import Button from './Button';

class Counter extends Component {
    constructor(props) {
    super(props);
    this.state = {
        counter : 0
        } 
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)

    }
    increment () {
        this.setState({counter: this.state.counter + 1})
    }

    decrement () {
        if(this.state.counter > 0) {

            this.setState({counter: this.state.counter - 1})
        }
        
    }
    render() {
        return (
           <div className="App">
               <h2>{this.state.counter}</h2>
                <Button 
                title="incremenet"
                clickHandler = {this.increment}
                />
                 <Button 
                title="decremenet"
                clickHandler = {this.decrement}
                />
           </div> 
        )
    }
}
export default Counter;