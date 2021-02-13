import React from 'react';
import ReactDOM from 'react-dom';

/**
 * THE MODUL DON'T WORK DIRECTLY, he need to put instead the index.js because
 * it show how useSTate work
 */
import '../style/counter_char.css';

let call_count = -1;
let states = [];
function useState(init_value) {
  const id = ++call_count; // to check the rank of the useState
  const set_value = (new_value) => {
    states[id][0] = new_value;
    // reRender();
  };
  let tuple = [init_value, set_value];
  states.push(tuple);
  return tuple;
}

const CharacterCounterInput = ({ text, defaults }) => {
  // const [count, set_count] = useState(0);
  const [message, set_message] = useState('');
  const [error, setError] = useState(false);
  const max_length = 30;

  // console.log(states);

  function show_result() {
    const is = message.length > max_length ? true : false;
    if (is) {
      setError(true);
      console.log('mais que se passe-t-il ? ');
    } else {
      setError(false);
    }
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

function reRender() {
  call_count = -1;
  ReactDOM.render(<App />, document.getElementById('shook-root'));
}

reRender();

// export default App;
