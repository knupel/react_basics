import React, { Component } from "react";

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

class Tempo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  // rect method
  componentDidMount() {
    this.tempo = setInterval(() => this.draw(), 1000);
  }

  // rect method
  componentWillUnmount() {
    clearInterval(this.tempo);
  }

  draw() {
    // don't do that, that' work but this method to refresh is not optimize
    // this.setState({ step: this.state.step + this.props.increment });

    // this one is better and optimized
    this.setState((state, props) => ({
      step: state.step + props.increment,
    }));
  }

  render() {
    return (
      <div>
        <h1>I AM {this.state.step}</h1>
      </div>
    );
  }
}

export default Tempo;
