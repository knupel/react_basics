import React from 'react';

// to set state is importe to bind the function.
export class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.toto = this.gros_minet.bind(this);
    this.titi = this.petit_minet.bind(this);
  }

  // the good
  gros_minet() {
    this.setState((prevState, props) => {
      return {
        count: prevState.count + props.step
      };
    });
  }

  petit_minet() {
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
        <button onClick={this.titi}>petit minet</button>
        <button onClick={this.toto}>gros minet</button>
      </div>
    );
  }
}
