import React from 'react';

const App = () => {
  let isGameOver;

  return (
    <>
      {/* I must work on this notation ???? */}
      {!isGameOver && (
        <div>
          <div className="first-dash"></div>
          <div className="second-dash"></div>
          <div className="container">
            <div className="dot"></div>
            <div className="third-dash"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
