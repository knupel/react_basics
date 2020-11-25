import React, { useState, useEffect } from "react";

export function HookState() {
  const [count, setCount] = useState(0);
  document.title = `Vous avez cliqué ${count} fois`;
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>click with useState()</button>
    </div>
  );
}

export function HookStateAndEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        click with useState() and UseEffect()
      </button>
    </div>
  );
}
