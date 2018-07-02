import React from 'react'


class Tier3 extends React.Component  {
  // console.log('tier3 props', props)
  // this component does not need to change (but feel free to change however you like!)
  render() {
    return (
    <div onClick={this.props.changeGrandChild} className="tier3" style={{backgroundColor: this.props.color, color: this.props.color}}></div>
    )
  }
}

export default Tier3
