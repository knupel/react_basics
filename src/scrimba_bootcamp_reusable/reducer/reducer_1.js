import React, { useReducer } from 'react';

function useState(initialValue) {
  function func(state, action) {
    return action;
  }
  let [state, dispatch] = useReducer(func, initialValue);

  return [state, dispatch];
}

const App = () => {
  // function func(state, action) {
  //   switch (action.type) {
  //     case 'INCREMENT': {
  //       return { ...state, count: state.count + 1 };
  //     }
  //     case 'DECREMENT': {
  //       return { ...state, count: state.count - 1 };
  //     }
  //     default: {
  //       return state;
  //     }
  //   }
  // }

  // const arr = { count: 0 };
  const [count, setCount] = useState(0);
  //  const [state, dispatch] = useReducer(func, arr);
  // const [state, dispatch] = useReducer(func, arr);

  // let { count } = state;

  const add = () => {
    setCount(count + 1);
    // dispatch({ type: 'INCREMENT' });
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
      // dispatch({ type: 'DECREMENT' });
    }
  };

  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <div>{count}</div>
        <button onClick={add}>+</button>
      </div>
    </section>
  );
};

export default App;
