import React from 'react';

function elem_galery() {
  return (
    <div className="elemGalery">
      <img src="http://placekitten.com/300/200" />
    </div>
  );
}

function ElemGalery() {
  return (
    <div className="elemGalery">
      <img src="http://placekitten.com/300/200" />
    </div>
  );
}

export function Galery() {
  // return elem_galery();
  return <ElemGalery />;
}
