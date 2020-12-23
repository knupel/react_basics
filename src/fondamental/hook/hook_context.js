import React, { createContext, useContext } from 'react';

const MyContext = createContext();
MyContext.displayName = 'context_test';
// https: /www.codementor.io/@sambhavgore/an-example-use-context-and-hooks-to-share-state-between-different-components-sgop6lnrd
// https://reactjs.org/docs/context.html

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

export const Mother = () => {
  return (
    <MyContext.Provider value={'The truth is in the context'}>
      <ChildA />
    </MyContext.Provider>
  );
};
