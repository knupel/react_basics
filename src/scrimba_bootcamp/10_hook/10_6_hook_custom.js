import React, { Component, useState } from 'react';

function Funk(props) {
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount((arg) => arg + 1);
  // };

  // or simply
  function increment() {
    setCount((arg) => arg + 1);
  }

  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={increment}>Add 1</button>
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
