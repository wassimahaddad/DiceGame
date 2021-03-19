import React from "react";

class Dice extends React.Component {
  render() {
    return <div className={`dice${this.props.value}`}></div>;
  }
}

export default Dice;
