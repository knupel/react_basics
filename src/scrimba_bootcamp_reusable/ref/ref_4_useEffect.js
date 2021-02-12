import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [other, setOther] = useState('');
  let initialFocusRef = useRef(null);
  let focusRef = useRef(null);

  useEffect(() => {
    initialFocusRef.current.focus();
  }, []); // dependency array

  // [] => only called on initial render
  // no array => called on initial render, and every state change
  // [variable] => called on initial render, and whenever variable changes

  return (
    <section>
      <h2>Email Signup</h2>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
          if (name.length >= 10) {
            focusRef.current.focus();
          }
        }}
      />
      <input
        type="text"
        value={email}
        ref={focusRef}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        value={other}
        ref={initialFocusRef}
        d
        placeholder="other info"
        onChange={(e) => {
          setOther(e.target.value);
        }}
      />
    </section>
  );
};

export default App;
