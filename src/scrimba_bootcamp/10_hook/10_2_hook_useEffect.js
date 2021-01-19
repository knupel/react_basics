import React, { Component, useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function Funk() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);

  function increment() {
    setCount((arg) => arg + 1);
  }

  function decrement() {
    setCount((arg) => arg - 1);
  }

  // here we pass count and the update come only if the value of count change
  // but we can imagine there is other condition because useEffect use an array
  // if tha array is empty the effect is use only at the beggining of the page
  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  // cause an infinite loop
  // change at each refre
  // useEffect(() => {
  //   setColor(randomcolor());
  // });

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
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
      </div>
    );
  }
}

export default C;
