import React from 'react';
import ReactDOM from 'react-dom';

let list_punk = ['rouge', 'noir', 'blanc'];
const list_items = list_punk.map((list_punk) => <li>{list_punk}</li>);

function MyList() {
  return (
    <ul>
      <li>truc</li>
      <li>machin</li>
      <li>bidule</li>
    </ul>
  );
}

ReactDOM.render(
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <MyList />
    {list_punk}
    {list_items}
  </div>,
  document.getElementById('shook-root')
);
