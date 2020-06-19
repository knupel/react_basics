import React from 'react';

export function ConditionalV2() {
  return <h1>Some cool stuff about conditional rendering</h1>;
}

export function ConditionalV1(props) {
  return (
    <div>
      <h1>header</h1>
      {props.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Some cool stuff about conditional rendering</h1>
      )}
      <h1>footer</h1>
    </div>
  );
}

export function ConditionalV0(props) {
  if (props.isLoading === true) {
    return <h1>Loading...</h1>;
  }
  return <h1>Some cool stuff about conditional rendering</h1>;
}
