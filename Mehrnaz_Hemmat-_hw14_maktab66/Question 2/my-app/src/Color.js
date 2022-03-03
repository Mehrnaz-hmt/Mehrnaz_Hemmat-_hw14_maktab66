import React, { Component } from 'react'

export default class Color extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addcolors}>addcolors</button>
      </div>
    )
  }
}
