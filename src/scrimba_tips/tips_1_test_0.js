import React from 'react';

/** don't work
 * https://scrimba.com/learn/21tips/tip-4-test-driven-programming-cwwRVJSV
 * that's something work with jasmine...
 */
function addExclamation(str) {
  // write code here
  return str.concat('2');
}

/**
 * Test Suite
 */
function describe() {
  return (
    'adds an exclamation to the word',
    () => {
      // arrange
      const word = 'Jump';

      // act
      const result = addExclamation(word);

      // log
      console.log('result: ', result);

      // assert
      expect(result).toBe('Jump!');
    }
  );
}

const App = () => {
  return <>{describe()}</>;
};

export default App;
