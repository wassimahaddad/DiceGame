import React from "react";

class Dice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={`dice${this.props.value}`}></div>;
  }
}

export default Dice;
