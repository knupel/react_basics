import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 3,
      col: 3,
    };
  }
  render() {
    return brace(this.state.row, this.state.col);
    // const elems = Array(this.state.row * this.state.col).fill("2");
    // // JSX basics test to understand the {} using
    // return (
    //   <div>
    //     {elems.map((y) => (
    //       <button>{y}</button>
    //     ))}
    //   </div>
    // );
  }
}

const brace = (row, col) => {
  const elems = Array(row * col).fill("2");
  // JSX basics test to understand the {} using
  return (
    <div>
      {elems.map((arg) => (
        <button>{arg}</button>
      ))}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Basic />
  </React.StrictMode>,
  document.getElementById("root")
);
