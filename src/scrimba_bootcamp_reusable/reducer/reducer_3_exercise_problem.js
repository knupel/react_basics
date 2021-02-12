import React, { useState, useReducer } from 'react';

import '../style/reducer.css';
import friendlyWords from 'friendly-words';

let backgrounds = [
  'Noble',
  'Urchin',
  'Folk Hero',
  'Acolyte',
  'Criminal',
  'Hermit',
  'Guild Artisan',
  'Sage'
];

function randomBackground() {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

function randomName() {
  let array = friendlyWords.predicates;
  let string = array[Math.floor(Math.random() * array.length)];
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 1. Replace the useStates with a useReducer
// 2. Move our useReducer into a custom hook

function App() {
  let [darkMode, setDarkMode] = useState(false);
  let [name, setName] = useState('');
  let [background, setBackground] = useState('');
  let [error, setError] = useState(null);

  function handleBackgroundSelect(event) {
    let value = event.target.value;
    setBackground(value);
    if (!backgrounds.includes(value)) {
      setError('This background does NOT exist.');
    } else {
      setError(null);
    }
  }

  return (
    <>
      <div className={`App ${darkMode ? 'darkmode' : ''}`}>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Dark Mode {darkMode ? 'ON' : 'OFF'}
        </button>{' '}
        <br />
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            if (event.target.value.length > 15) {
              setError('Name is WAY too long, bucko.');
            }
          }}
        />
        <select value={background} onChange={handleBackgroundSelect}>
          {backgrounds.map((b) => {
            return <option key={`bg-${b}`}>{b}</option>;
          })}
        </select>
        {error && (
          <div className="error">
            {error}
            <button
              onClick={() => {
                setError(null);
              }}
            >
              Dismiss
            </button>
          </div>
        )}
        <div className="sheet">
          <h3>Name: {name}</h3>
          <h3>Background: {background}</h3>
        </div>
        <button
          onClick={() => {
            setName(randomName());
            setBackground(randomBackground());
          }}
        >
          Do it all for me instead
        </button>
      </div>
    </>
  );
}

export default App;
