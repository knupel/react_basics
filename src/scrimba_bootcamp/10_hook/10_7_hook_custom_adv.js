import React, { Component, useState } from 'react';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
function useToggler(defaultOnValue = false) {
  // Create the state
  const [isToggledOn, setIsToggledOn] = useState(defaultOnValue);

  // Create a function for easily flipping the isToggledOn value
  function toggle() {
    setIsToggledOn((prev) => !prev);
  }

  // Return something useful for whatever component will be using this hook
  return [isToggledOn, toggle];
}

function Favorite(props) {
  const [isFavorited, toggle] = useToggler(false);

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{isFavorited ? '❤️' : '♡'}</span>
      </h1>
    </div>
  );
}

function Menu(props) {
  const [show, toggle] = useToggler(true);

  return (
    <div>
      <button onClick={toggle}>{show ? 'Hide' : 'Show'} Menu </button>
      <nav style={{ display: show ? 'block' : 'none' }}>
        <h6>Signed in as Coder123</h6>
        <p>
          <a>Your Profile</a>
        </p>
        <p>
          <a>Your Repositories</a>
        </p>
        <p>
          <a>Your Stars</a>
        </p>
        <p>
          <a>Your Gists</a>
        </p>
      </nav>
    </div>
  );
}

class C extends Component {
  render() {
    return (
      <div>
        <Menu />
        <hr />
        <Favorite />
      </div>
    );
  }
}

export default C;
