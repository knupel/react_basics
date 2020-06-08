import React, { Component } from "react";
import Basic from "./0_basic";
// import ReactDOM from "react-dom";

class Clock extends Component {
  render() {
    return (
      <div className="Clock">
        <h1>chez vous il est {this.props.date.toLocateTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
// function tictac() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById("shook-root")
//   );
// }

// setInterval(tictac, 1000);
