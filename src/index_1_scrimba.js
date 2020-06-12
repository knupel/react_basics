import React from 'react';
import ReactDOM from 'react-dom';
import './css/scrimba.css';

let place = ['home', 'desk', 'garden'];

function MyInfo() {
  return (
    <div className="MyInfo">
      <h1>Stan le punk</h1>
      <p>The man who tried to an artist coder</p>
      <ul>
        <li>{place[0]}</li>
        <li>{place[1]}</li>
        <li>{place[2]}</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById('shook-root'));
