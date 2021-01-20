import React, { Component, useState, useRef } from 'react';

function Funk() {
  const [todo, set_todo] = useState('');
  const [todo_list, set_todo_list] = useState([]);
  const input_ref = useRef(null);
  function handle_change(event) {
    set_todo(event.target.value);
  }

  function add_todo(event) {
    event.preventDefault();
    set_todo_list((arg) => [...arg, todo]);
    set_todo('');
    // give the oppurtunity to stay where the ref is pointing, here it's input
    input_ref.current.focus();
    console.log(input_ref);
  }

  const all_todo = todo_list.map((todo) => <p key={todo}>{todo}</p>);

  return (
    <div>
      <form>
        <input
          ref={input_ref}
          type="text"
          name="todo"
          value={todo}
          onChange={handle_change}
        />
        <button onClick={add_todo}>Add todo item</button>
      </form>
      {all_todo}
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
