import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const childColor = getReducedColor(initialColor)
    const grandChildColor = getReducedColor(childColor)
    this.state = {
      color: initialColor,
      childColor: childColor,
      grandChildColor: grandChildColor
    }
  }

  handleClick = (event) => {
    event.stopPropagation()
    let anotherChildColor = getRandomColor()
    let anotherGrandChildColor = getReducedColor(anotherChildColor)

    this.setState({
      childColor: anotherChildColor,
      grandChildColor: anotherGrandChildColor
    })
  }

  changeGrandChild = (event) => {
    event.stopPropagation()
    let finalGrandChildColor = getRandomColor()
    this.setState({
      grandChildColor : finalGrandChildColor
    }, () => console.log('new grand child color', this.state.grandChildColor))
  }

  changeColors = () => {
    let newColor = getRandomColor()
    let newChildColor = getReducedColor(newColor)
    let grandChildColor = getReducedColor(newChildColor)
    this.setState(
      { color: newColor,
        childColor: newChildColor,
        grandChildColor: grandChildColor
      })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.changeColors} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 changeGrandChild={this.changeGrandChild} grandChildColor={this.state.grandChildColor} handleClick={this.handleClick} value="tier-2" color={this.state.childColor} />
        <Tier2 changeGrandChild={this.changeGrandChild} grandChildColor={this.state.grandChildColor} handleClick={this.handleClick} value="tier-2" color={this.state.childColor} />
      </div>
    )
  }
}
