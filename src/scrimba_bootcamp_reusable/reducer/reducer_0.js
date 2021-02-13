import React, { useState, useReducer } from 'react';

const App = () => {
  // const [count, setCount] = useState(0);
  function func(state, action) {
    switch (action.type) {
      case 'INCREMENT': {
        return { ...state, count: state.count + 1 };
      }
      case 'DECREMENT': {
        return { ...state, count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  }

  const arr = { count: 0 };

  const [state, dispatch] = useReducer(func, arr);

  // here the example with everything integrate...very uggly style from pro dev
  // const [state, dispatch] = useReducer(
  //   (state, action) => {
  //     switch (action.type) {
  //       case 'INCREMENT': {
  //         return { ...state, count: state.count + 1 };
  //       }
  //       case 'DECREMENT': {
  //         return { ...state, count: state.count - 1 };
  //       }
  //       default: {
  //         return state;
  //       }
  //     }
  //   },
  //   {
  //     count: 0
  //   }
  // );

  let { count } = state;

  const add = () => {
    // setCount(count + 1);
    dispatch({ type: 'INCREMENT' });
  };

  const subtract = () => {
    if (count > 0) {
      // setCount(count - 1);
      dispatch({ type: 'DECREMENT' });
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

// example to uunderstand how reducer work
// let initialState = { count: 0, cake: true };

// let actions = [
//   { type: 'ADD', by: 2 },
//   { type: 'MINUS', by: 4 },
//   { type: 'ADD', by: 10 },
//   { type: 'EAT', is: false }
// ];

// function reducer(state, action) {
//   if (action.type === 'ADD') {
//     return { ...state, count: state.count + action.by };
//   } else if (action.type === 'MINUS') {
//     return { ...state, count: state.count - action.by };
//   } else if (action.type === 'EAT') {
//     return { ...state, cake: (state.cake = action.is) };
//   }
//   return state;
// }

// console.log(actions.reduce(reducer, initialState));
