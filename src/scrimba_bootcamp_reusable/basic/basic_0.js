import React from 'react';

function Basic() {
  // traduction in JAvascript of JSX power
  // const reactElement = <div>Hello</div>;

  let text = 'heellllloooooo';
  // const reactElement = React.createElement(
  //   'div',
  //   { className: 'fish' },
  //   (() => text + '!!!!!')()
  // );

  const reactElement = React.createElement(
    'div',
    null,
    (() => text + '!!!!!')()
  );
  return reactElement;
}

export default Basic;
