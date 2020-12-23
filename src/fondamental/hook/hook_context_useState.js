import React, { createContext, useContext, useState } from 'react';

// https://reactjs.org/docs/context.html
// https://milddev.com/react/react-createcontext/

const MyContext = createContext();
MyContext.displayName = 'context_test';

const ChildA = () => {
  return (
    <div>
      <ChildB />
    </div>
  );
};

const ChildB = () => {
  const content = useContext(MyContext);
  return <h1>{content}</h1>;
};

export const StateContext = () => {
  const [is, set_is] = useState('false');

  const toggle = () => {
    set_is(is === 'false' ? 'true' : 'false');
  };

  return (
    <MyContext.Provider value={is}>
      <ChildA />
      <button onClick={toggle}>Change truth</button>
    </MyContext.Provider>
  );
};
