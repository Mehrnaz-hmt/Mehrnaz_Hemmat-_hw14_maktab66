import React, {Component} from 'react'

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clickHandler}>{this.props.title}</button>
  
            </div>

        )
    }
}

export default Button;


