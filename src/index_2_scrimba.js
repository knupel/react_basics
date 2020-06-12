import React from 'react';
import ReactDOM from 'react-dom';
import './css/MyInfo.css';

let place = ['home', 'desk', 'garden'];

function MyInfo() {
  return (
    <div className="MyInfo">
      <h1>Stan le punk</h1>
      <p>The man who tried to an artist coder</p>
      <li>{place[0]}</li>
      <li>{place[1]}</li>
      <li>{place[2]}</li>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById('shook-root'));
