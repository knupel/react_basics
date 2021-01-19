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

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // I don't understand the utility of clearing the interval
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  // or but maybe is not optimize
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount((prevCount) =>
  //       prevCount !== count ? prevCount : prevCount + 1
  //     );
  //   }, 1000);
  //   setColor(randomcolor());
  // }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
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
