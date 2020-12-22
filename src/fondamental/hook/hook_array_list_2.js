import React, { useState, useEffect } from 'react';

// https://www.digitalocean.com/community/tutorials/how-to-manage-state-with-hooks-on-react-components
export function HookStateList_2() {
  let arr = [0, 1, 2, 3];
  const [list, set_list] = useState([]);

  useEffect(() => {
    arr.forEach((elem) => {
      set_list((prev_id) => [...prev_id, elem]);
    });
  }, []); // avoid to put the dependencies, if you do your start in loop

  function del() {
    const temp = [...list];
    temp.splice(temp.indexOf(list.length), 1);
    set_list(temp);
  }

  return (
    <div>
      <p>Click number {list.length}</p>
      <button onClick={del}>delete from list</button>
    </div>
  );
}
