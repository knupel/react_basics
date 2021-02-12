import React, { useEffect, useState } from 'react';
/**
 * This code must be look in regard with the reducer_4_with_reducer.js
 */
const App = () => {
  let [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      });
  }, []);

  return (
    <section>
      <h2>Get User Data</h2>
      <div className="user">
        {user && (
          <>
            User ID: {user.id} <br />
            User Title: {user.title}
          </>
        )}
      </div>
    </section>
  );
};

export default App;
