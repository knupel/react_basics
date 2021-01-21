import React, { Component, useState } from 'react';

function arr_exp() {
  let a = 1;
  let b = 'une belle chanson';
  return [a, b];
}

function obj_exp() {
  let a = 1;
  let b = 'un jolie poeme';
  return { a, b };
}

function Funk(props) {
  // don't need to use an exact name, we can set like we want
  const [machin, bidule] = arr_exp();
  // need to be exact like in the model function for the name setting and using
  const { truc, chouette } = obj_exp();
  const { a, b } = obj_exp();

  return (
    <div>
      machin:{machin} bidule:{bidule} <br />
      truc:{truc} chouette:{chouette} <br />
      a:{a} b:{b}
    </div>
  );
}

class C extends Component {
  render() {
    return (
      <div>
        <Funk />
      </div>
    );
  }
}

export default C;
