import React from 'react';

function Funk(props) {
  return <div>{props.name}</div>;
}

function Comp() {
  let value = 2;
  return (
    <div>
      <Funk name={`Quarante${value}`} />
    </div>
  );
}

export default Comp;
