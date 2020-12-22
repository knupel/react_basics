import React, { useState, useEffect } from 'react';

export function HookState() {
  const [count, setCount] = useState(0);
  document.title = `Click number ${count}`;
  return (
    <div>
      <p>Click number {count}</p>
      <button onClick={() => setCount(count + 1)}>click with useState()</button>
    </div>
  );
}



export function HookStateAndEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Click number ${count}`;
  });

  return (
    <div>
      <p>Click number{count}</p>
      <button onClick={() => setCount(count + 1)}>
        click with useState() and UseEffect()
      </button>
    </div>
  );
}
