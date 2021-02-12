import React from 'react';
const Button = ({ children }) => {
  return <button>{children}</button>;
};
/**
 * The reson why the both method work
  1) <Button children={element} />
  2) React.createElement(Button, { children: element })
    
  1) <Button>{element}</Button>
  2) React.createElement(Button, {}, element)
  3) React.createElement(Button, { children: element })
 */
function Basic() {
  return (
    <div>
      <Button> + ADD</Button>
      <Button> - SUB</Button>
      <Button children="**** MULT" />
    </div>
  );
}

export default Basic;
