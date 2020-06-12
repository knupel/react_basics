import React from 'react';

function check_box(title) {
  return (
    <div className="checkbox">
      <input type="checkbox" />
      <p>{title}</p>
    </div>
  );
}
export function CheckBoxV1() {
  return (
    <div>
      <main className="list">
        {check_box('stan')}
        {check_box('le')}
        {check_box('punk')}
      </main>
    </div>
  );
}

export function CheckBoxV0() {
  return (
    <div>
      <main>
        <input type="checkbox" />
        <p>Stan</p>
        <input type="checkbox" />
        <p>le</p>
        <input type="checkbox" />
        <p>punk</p>
      </main>
    </div>
  );
}
