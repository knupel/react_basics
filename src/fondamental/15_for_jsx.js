import React from 'react';

export function ForJSX() {
  const id = ['400', '500', '324', '42'];
  const name_fr = ['vin rouge', 'vin blanc', 'champagne', 'whisky'];

  let line = '';
  for (let i = 0; i < id.length; i++) {
    line += '<option>';
    line += id[i];
    line += name_fr[i];
    line += '</option>';
  }

  // render() {
  return <div>truc</div>;
  // }
}
