import React from 'react';

export function ListKey(props) {
  const num = props.numbers;
  // we add key to help React to manage the elements in list.
  const list_items = num.map((num) => <li key={num.toString()}>{num * 2}</li>);
  return (
    <div>
      <ul>{list_items}</ul>
    </div>
  );
}

// To creat key is better to use a key id by your self
// not the index because this one can change
// plus when you don't specify a key by default Rect use the index.
function get_random_int(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function ListKeyIDrandom(props) {
  const num = props.numbers;
  // we add key to help React to manage the elements in list.
  const list_items = num.map((num) => (
    <li key={get_random_int(1000)}>{num * 2}</li>
  ));
  return (
    <div>
      <ul>{list_items}</ul>
      {/* <ul>{props.value}</ul> */}
    </div>
  );
}
