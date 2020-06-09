import React from "react";

function off() {
  return <h1>FUCK OFF</h1>;
}

function on() {
  return <h1>ON AIR</h1>;
}
/**
 * write experimental is activate by default in React
 * transform-class-properties
 */
export default class ShowWhat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is: true,
    };
  }

  render() {
    let show;
    if (this.state.is) {
      show = <on />;
    }
    show = <off />;
    // result
    return <div>{show}</div>;
  }
}
