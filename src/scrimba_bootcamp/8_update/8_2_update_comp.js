import React, { Component, memo } from 'react';

function GrandParent(props) {
  console.log('[👴🏼]   [ ]   [ ]   [ ] rendered');
  return (
    <div>
      <p>GrandParent Component</p>
      {/* <Parent />
      <Parent /> */}
      <P />
      <P />
    </div>
  );
}

const GP = memo(function GrandParent(props) {
  /* only rerenders if props change */
});

function Parent() {
  console.log('[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered');
  return (
    <div>
      <p>Parent Component</p>
      {/* <Child />
      <Child /> */}
      <C />
      <C />
    </div>
  );
}

const P = memo(function Parent(props) {
  /* only rerenders if props change */
});

function Child() {
  console.log('[ ]   [ ]   [🧒🏻]   [ ] rendered');
  return (
    <div>
      <p>Child Component</p>
      {/* <GrandChild />
      <GrandChild /> */}
      <GC />
      <GC />
    </div>
  );
}

const C = memo(function Child(props) {
  /* only rerenders if props change */
});

function GrandChild() {
  console.log('[ ]   [ ]   [ ]   [👶🏻] rendered');
  return (
    <div>
      <p>GrandChild Component</p>
    </div>
  );
}

const GC = memo(function GranGrandChilddParent(props) {
  /* only rerenders if props change */
});

export default class Update2 extends Component {
  state = { count: 0 };

  increment = () =>
    this.setState((prevState) => ({ count: prevState.count + 1 }));

  render() {
    console.log('[GP] [P] [C] [GC] APP just rendered');
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <h2>{this.state.count}</h2>
        <p>App component</p>
        {/* <GrandParent count={this.state.count} />
        <GrandParent /> */}
        <GP count={this.state.count} />
        <GP />
      </div>
    );
  }
}
