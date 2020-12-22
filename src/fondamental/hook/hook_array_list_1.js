import React, { useState } from 'react';

// https://www.digitalocean.com/community/tutorials/how-to-manage-state-with-hooks-on-react-components
export function HookStateList_1() {
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
