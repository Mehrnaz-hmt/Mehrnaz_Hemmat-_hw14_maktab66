import React, { Component } from 'react'
import Color from './Color';
export default class ColorGenerator extends Component {
    constructor(){
       super()
        this.state={
            colors:[]
        }
    }
    addColor=()=>{
      let n = (Math.random() * 0xfffff * 1000000).toString(16); 
      let b = '#' + n.slice(0, 6);
      this.setState({colors:[...this.state.colors,b]})
          }
  render() {
    console.log(this.state.colors)
    return (
      <>
          <Color addcolors={this.addColor}/>
          
          <ul >
         
           {this.state.colors.map(index=> { return(
           <li style={{display:'flex'}}><div style={{width:'15px',height:'15px',background:`${index}`}}></div> {index} </li>)})}
          </ul>
      </>
    )
  }
}

