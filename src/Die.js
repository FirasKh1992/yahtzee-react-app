import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWorlds: ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx)
  }
  render() {
    const {numberWorlds,val,locked,disabled,rolling} = this.props;
    let classes = ` Die fas fa-dice-${numberWorlds[val - 1]
      } fa-5x `;
    if (locked) classes += "Die-locked ";
    if(rolling) classes+="Die-rolling";
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled}
      />

    );
  }
}

export default Die;
