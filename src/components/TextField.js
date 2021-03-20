import React from "react";

class TextField extends React.Component {
  render() {
    return (
      <div>
        <label className={this.props.className}>{this.props.name}: </label>
        <input
          className={this.props.className}
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default TextField;
