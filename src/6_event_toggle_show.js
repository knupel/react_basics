import React from "react";

function off() {
  return <h1>FUCK OFF</h1>;
}

function on() {
  return <h1>ON AIR</h1>;
}

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is: true,
    };
  }

  render() {
    if (this.props.toggle_is) {
      return on();
    } else {
      return off();
    }
  }
}

// mother class
export default class ToggleShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle_is: true,
    };
    // for the callblack
    this.handle_click = this.handle_click.bind(this);
  }

  handle_click() {
    this.setState((state) => ({
      toggle_is: !state.toggle_is,
    }));
  }

  render() {
    return (
      <div className="all">
        <button onClick={this.handle_click}>
          {this.state.toggle_is ? "ON" : "OFF"}
        </button>
        <Show toggle_is={this.state.toggle_is} />
      </div>
    );
  }
}
