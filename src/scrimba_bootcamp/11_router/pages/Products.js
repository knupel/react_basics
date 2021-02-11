import React from 'react';
import prod from '../data/data_product';

import { Link, Switch, Route } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      {prod.map((elem) => (
        <div key={elem.id}>
          <div>{elem.name}</div>
          <div>{elem.price}</div>
          <div key={elem.key}>
            <Link to={`/products/${elem.id}`}>Show more</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
