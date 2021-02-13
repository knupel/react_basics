import React, { Component } from 'react';

export function Feature() {
  return (
    <div>
      <News />
      <News2 />
      <OldJS />
      <NewJS />
    </div>
  );
}

export function News() {
  return <div>classic function write</div>;
}

export const News2 = () => <div>compact function writing</div>;

class NewJS extends Component {
  // now we can simplify totally the constructor like that
  state = {
    count: 0,
    name: 'New Style'
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0
  //   };
  //   // with the new feature we don't need to bind
  //   // this.increment = this.increment.bind(this);
  //   // this.decrement = this.decrement.bind(this);
  // }

  // compact write
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // classic write
  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  };

  render() {
    const { count, name } = this.state;
    return (
      <div>
        <h1>
          {name} {this.state.count}
        </h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

class OldJS extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  decrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Old Style{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
