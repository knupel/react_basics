import React from 'react';

// The Good, the Bad and the Uggly,
// look in function the difference between them.
export function ForJSX() {
  return the_good();
  // return the_uggly();
  // return the_bad();
}

// THE BAD
// unfortunatly there is no for loop in JSX / REACT
// instead we use map to create component and read it after make it.
function the_bad() {
  const id = ['400', '500', '324', '42'];
  const name = ['vin rouge', 'vin blanc', 'champagne', 'whisky'];

  let line = '';
  for (let i = 0; i < id.length; i++) {
    line += '<option>';
    line += id[i];
    line += name[i];
    line += '</option>';
  }

  return <div>{line}</div>;
}

// THE GOOD and the UGGLY
let data = [
  {
    id: '400',
    name: 'vin rouge',
    degree: 13
  },
  {
    id: '500',
    name: 'vin blanc',
    degree: 13
  },
  {
    id: '324',
    name: 'champagne',
    degree: 13
  },
  {
    id: '42',
    name: 'whisky',
    degree: 45
  },
  {
    id: '1664',
    name: 'bière',
    degree: 4.5
  }
];

// THE GOOD
function the_good() {
  const list = data.map((elem) => (
    <ItemGood
      key={elem.id}
      info={{
        name: elem.name,
        degree: elem.degree
      }}
    />
  ));
  return list;
}

function ItemGood(props) {
  return (
    <div>
      <h2>{props.info.name}</h2>
      <p>{props.info.degree}</p>
    </div>
  );
}

// THE UGGLY
function ItemUggly(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.degree}</p>
    </div>
  );
}

function the_uggly() {
  const list = data.map((elem) => (
    <ItemUggly key={elem.id} name={elem.name} degree={elem.degree} />
  ));
  return list;
}
