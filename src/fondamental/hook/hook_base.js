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

// https://www.digitalocean.com/community/tutorials/how-to-manage-state-with-hooks-on-react-components
export function HookStateList() {
  let name = `truc`;
  const [list, setList] = useState([]);
  function add() {
    setList((current) => [...current, name]);
  }

  function del() {
    const temp = [...list];
    temp.splice(temp.indexOf(list.length), 1);
    setList(temp);
  }

  return (
    <div>
      <p>Click number {list.length}</p>
      <button onClick={add}>add {name} to list</button>
      <button onClick={del}>delete {name} from list</button>
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
