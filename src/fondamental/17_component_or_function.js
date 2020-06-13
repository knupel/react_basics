import React from 'react';

function elem_img() {
  return (
    <div>
      <img src="http://placekitten.com/300/200" />
    </div>
  );
}

function ElemImg() {
  return (
    <div>
      <img src="http://placekitten.com/300/200" />
    </div>
  );
}

export function ComponentOrFunction() {
  return (
    <React.StrictMode>
      {elem_img()} {elem_img()}
    </React.StrictMode>
  );
  // return (
  //   <React.StrictMode>
  //     <ElemImg />
  //     <ElemImg />
  //   </React.StrictMode>
  // );
}
