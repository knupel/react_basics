// import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// by class
class Basic extends Component {
  // class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 3,
      col: 3,
    };
  }
  render() {
    console.log(this.props.name, this.props.nickname);
    return (
      <div className="Basic">
        <h1>Hello World!</h1>
        {brace_jsx(this.state.row, this.state.col, this.props.name)}
      </div>
      // brace_jsx(this.state.row, this.state.col, this.props.name)
    );
  }
}

const brace_jsx = (row, col, str) => {
  const elems = Array(row * col).fill(str);
  // JSX basics test to understand the {} using
  return (
    <div>
      {elems.map((arg) => (
        <button>{arg}</button>
      ))}
    </div>
  );
};

// by function, the function must be in Capital, because JSX must be know that's React element.
// if I understand well.
function Welcome(props) {
  return <h1>Bonjour {props.name}</h1>;
}
const elem_welcome = <Welcome name="Félix" />;

// from other function
function Multi() {
  return (
    <div>
      <Welcome name="Lysandre" />
      <Welcome name="Lalou" />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* here we define the name for Basic.props.name  */}
    {elem_welcome}
    <Multi />
    <Basic name="Stan" nickname="le Punk" />
  </React.StrictMode>,

  // <Multi />,
  document.getElementById("shook-root")
);
