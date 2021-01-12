import React from 'react';
import callout from './styles.css';

export const Child = () => (
  <>
    <Callout>
      <h1>La merde</h1>
    </Callout>
    <Callout>
      A lalala les enfants qu'est-ce que c'est chiant !!!!
      <button>OUI</button>
      <button>NON</button>
    </Callout>
  </>
);

function Callout(props) {
  return <div className="callout">{props.children}</div>;
}
