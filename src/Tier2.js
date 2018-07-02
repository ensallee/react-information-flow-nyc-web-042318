import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {
  render() {
    // console.log(this.props)
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.props.handleClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 changeGrandChild = {this.props.changeGrandChild} color={this.props.grandChildColor} />
        <Tier3 changeGrandChild = {this.props.changeGrandChild} color={this.props.grandChildColor} />
      </div>
    )
  }
}
