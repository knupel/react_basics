import React from 'react';
import randomcolor from 'randomcolor';

// to set state is importe to bind the function.
export class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      colour: 'red'
    };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.setState((prevState) => {
      return {
        count: prevState.count++
      };
    });
  }

  dec() {
    this.setState((prevState) => {
      return {
        count: prevState.count--
      };
    });
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentDidUpdate(previous_props, previous_state) {
    console.log('did update');
    if (previous_state.count !== this.state.count) {
      const temp_colour = randomcolor();
      this.setState({ colour: temp_colour });
    }
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1 style={{ color: this.state.colour }}>{this.state.count}</h1>
        <button onClick={this.inc}>++</button>
        <button onClick={this.dec}>--</button>
      </div>
    );
  }
}
