import React, { createContext, useContext, useState } from 'react';

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
  const fruitName = useContext(MyContext);

  return <h1>{fruitName}</h1>;
};

export const Mother = () => {
  return (
    <MyContext.Provider value={'Apple'}>
      <ChildA />
    </MyContext.Provider>
  );
};

// export {Mother};

// export default function Hook_test() {

//   const [count, setCount] = useState(0);
//   document.title = `Click number ${count}`;
//   return (
//     <div>
//       {/* <My_context.Provider>
//   <My_context.Consumer> */}
//       <p>Click number {count}</p>
//       <button onClick={() => setCount(count + 1)}>click with useState()</button>
//     </div>
//   );
// }
