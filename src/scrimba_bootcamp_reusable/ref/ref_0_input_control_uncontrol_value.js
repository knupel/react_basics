import React, { useState } from 'react';

import '../style/counter.css';

const App = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <section>
      <h2>Counter: CONTROL OR UNCONTROL by javascript</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <input
          type="number"
          aria-label="count"
          // in this case you can change but only by input java not by React code
          // it's reason why it's called uncontrol
          defaultValue={count}
          // value={count}
          onChange={(event) => {
            setCount(parseInt(event.target.value));
          }}
        />
        <button onClick={add}>+</button>
      </div>
    </section>
  );
};

export default App;
