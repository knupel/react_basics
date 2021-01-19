import React, { Component, useState } from 'react';

function Funk() {
  const us = useState();
  console.log('useState:', us);
  // giv an acces to array with name we want.
  const [state] = useState('Knupel');
  console.log('state:', state);

  return (
    <div>
      <div>Super Funk {state}</div>
    </div>
  );
}

function FunkAdv() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((arg) => arg + 1);
  }

  function decrement() {
    setCount((arg) => arg - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>remove</button>
    </div>
  );
}

class C extends Component {
  render() {
    return (
      <div>
        <Funk />
        <FunkAdv />
      </div>
    );
  }
}

export default C;
