import React, { Component } from "react";
// import Basic from "./0_basic";
import ReactDOM from "react-dom";

// without constructor, the result is not refresh
/**
class Clock extends Component {
  render() {
    return (
      <div className="Clock">
        <h1>Chez vous il est {this.props.date.toLocaleTimeString("fr")}</h1>
      </div>
    );
  }
}
*/

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  // rect method
  componentDidMount() {
    this.timer_id = setInterval(() => this.draw(), 1000);
  }

  // rect method
  componentWillUnmount() {
    clearInterval(this.timer_id);
  }

  draw() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="Clock">
        <h1>Chez vous il est {this.state.date.toLocaleTimeString("fr")}</h1>
      </div>
    );
  }
}

export default Clock;
