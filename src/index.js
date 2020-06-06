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
    console.log(this.props.name, this.props.nickname);
    return brace_jsx(this.state.row, this.state.col, this.props.name);
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

ReactDOM.render(
  <React.StrictMode>
    {/* here we define the name for Basic.props.name  */}
    <Basic name="Stan" nickname="le Punk" />
  </React.StrictMode>,
  document.getElementById("root")
);
