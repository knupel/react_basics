import React from 'react';

// to set state is importe to bind the function.
export class State extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handle_click = this.handle_click.bind(this);
  }

  // the good
  handle_click() {
    this.setState((prevState) => {
      return {
        count: prevState.count++
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handle_click}>Change!</button>
      </div>
    );
  }
}
