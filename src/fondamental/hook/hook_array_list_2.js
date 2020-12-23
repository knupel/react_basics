import React, { useState, useEffect } from 'react';

// https://www.digitalocean.com/community/tutorials/how-to-manage-state-with-hooks-on-react-components
export function HookStateList_2() {
  let arr = ['a', 'b', 'c', 'd'];
  const [list, set_list] = useState([]);
  let id = 0;
  useEffect(() => {
    arr.forEach((elem) => {
      set_list((prev_id) => [...prev_id, [id++, elem]]);
      // set_list((prev_id) => [...prev_id, elem]);
      console.log('je suis là');
      // id += 3;
    });
  }, []); // avoid to put the dependencies, if you do the programme start in infinite loop

  console.log('list.length:', list.length);
  list.forEach((obj) => console.log(obj[0], obj[1]));

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
