import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle_is: true,
    };
    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      toggle_is: !state.toggle_is,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggle_is ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
