import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} className={this.props.className}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
