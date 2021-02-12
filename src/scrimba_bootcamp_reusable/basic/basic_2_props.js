import React from 'react';

const Button = ({ ...props }) => {
  return <button {...props}></button>;
};
function Basic() {
  return (
    <div>
      <Button
        onClick={() => console.log('et voilà')}
        onMouseEnter={() => console.log('bien dedans')}
        onMouseLeave={() => console.log('Il est plus là le pinguin')}
      ></Button>
    </div>
  );
}

export default Basic;
