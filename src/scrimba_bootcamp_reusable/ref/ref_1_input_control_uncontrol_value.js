import React, { useState } from 'react';

import '../style/counter_char.css';

const CharacterCounterInput = ({ text, defaults }) => {
  // const [count, set_count] = useState(0);
  const [message, set_message] = useState('');
  const max_length = 30;

  function show_result() {
    const is = message.length > max_length ? true : false;
    if (is) console.log('mais que se passe-t-il ? ');
    return is ? (
      <div>
        {message.length}/{max_length}
      </div>
    ) : (
      <div>
        {message.length}/{max_length}
      </div>
    );
  }

  return (
    <div
      className={`counterInput ${message.length > max_length ? 'tooLong' : ''}`}
    >
      <div>
        {defaults.map((b) => {
          return (
            <button
              key={b}
              onClick={() => {
                set_message(b);
              }}
            >
              {b}
            </button>
          );
        })}
      </div>
      <textarea
        // here the controlled and uncontrolled component
        placeholder={text}
        //value={message}
        defaultValue={message} // that's don't work after your start to typing
        onChange={(event) => {
          set_message(event.target.value);
        }}
      />
      {show_result()}
    </div>
  );
};

const App = () => {
  let defaultMoods = ['Great', 'Okay', 'Bad'];

  return (
    <section>
      <h2>Mood Tracker</h2>
      <CharacterCounterInput
        text={'How was your day?'}
        defaults={defaultMoods}
      />
    </section>
  );
};

export default App;
