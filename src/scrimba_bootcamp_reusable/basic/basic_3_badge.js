import React from 'react';

import '../style/badge.css';

/**
 *
 * use ...props to pass function that's cool
 */
const Badge = ({ children, color, ...props }) => {
  return (
    <span className={`badge ${color}`} {...props}>
      {children}
    </span>
  );
};

const Basic = () => {
  return (
    <section>
      <h1>Check out these badges!</h1>
      <Badge color="green">Success</Badge> This is operational. <br />
      <Badge color="red">Removed</Badge> This is critical. <br />
      <Badge color="yellow">Warning</Badge> This is a warning. <br />
      <Badge
        color="blue"
        onClick={() => {
          console.log('click BLUE!');
        }}
      >
        Beta
      </Badge>{' '}
      This is in progress. <br />
    </section>
  );
};

export default Basic;
