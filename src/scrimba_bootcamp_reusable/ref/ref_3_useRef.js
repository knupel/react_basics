import React, { useState, useRef } from 'react';

/**
 * Ref can be use to target a specific place...focus on it !
 * Can be use for example to type the number of a credit card.
 */
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [other, setOther] = useState('');
  let focus_ref = useRef(null);

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
            focus_ref.current.focus();
          }
        }}
      />
      <input
        type="text"
        value={email}
        placeholder="Name"
        ref={focus_ref}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        value={other}
        placeholder="Email"
        ref={focus_ref}
        onChange={(e) => {
          setOther(e.target.value);
        }}
      />
    </section>
  );
};

export default App;
