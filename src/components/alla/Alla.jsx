import React, { Component } from "react";

class Alla extends Component {
  state = { name: "", color: "", textDecoration: false };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleColor = e => {
    this.setState({ color: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleName}
          value={this.state.name}
          placeholder="your name"
        />
        <input
          onChange={this.handleColor}
          value={this.state.color}
          placeholder="color"
        />
        <h1>
          Doctor:{" "}
          <span style={{ color: this.state.color }}>{this.state.name}</span>
        </h1>
      </div>
    );
  }
}

export default Alla;
