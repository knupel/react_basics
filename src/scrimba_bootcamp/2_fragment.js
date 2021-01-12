import React, { Fragment } from 'react';

export const Frag = () => <Child />;

// Don't use div improve the efficient of React to manage your website
function Child() {
  return (
    // <div>
    //   <h1>I'm the Child component</h1>
    //   <Grandchild />
    // </div>

    // <React.Fragment>
    //   <h1>I'm the Child component</h1>
    //   <Grandchild />
    // </React.Fragment>

    // <Fragment>
    //   <h1>I'm the Child component</h1>
    //   <Grandchild />
    // </Fragment>

    <>
      <h1>I'm the Child component</h1>
      <Grandchild />
    </>
  );
}

function Grandchild() {
  return (
    <div>
      <hr />
      <h3>I'm the Grandchild component</h3>
      <p>I'm also a part of the Grandchild component</p>
    </div>
  );
}

export default Grandchild;
