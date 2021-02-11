import React, { Component } from 'react';

// by class
class Basic extends Component {
  // class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 3,
      col: 3
    };
  }
  render() {
    console.log(this.props.name, this.props.nickname);
    return (
      <div className="Basic">
        <h1>Hello Weird!</h1>
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

export default Basic;
