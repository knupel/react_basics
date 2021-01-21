import React, { Component, useState } from 'react';

function useCount(arg) {
  const [count, setCount] = useState(arg);

  // const increment = () => {
  //   setCount((arg) => arg + 1);
  // };

  // or simply

  function increment() {
    setCount((arg) => arg + 1);
  }
  // return {count, increment}; //return object
  return [count, increment]; // eturn array
}

function Funk(props) {
  const [count, increment] = useCount(3);

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
