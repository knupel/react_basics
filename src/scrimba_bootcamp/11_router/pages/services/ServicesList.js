import React from 'react';
import servicesData from './servicesData';
import { Link } from 'react-router-dom';

function ServicesList() {
  return (
    <div>
      <h1>Services List Page</h1>
      <div>
        {servicesData.map((elem) => (
          <h3 key={elem._id}>
            <Link to={`/services/${elem._id}/`}>{elem.name}</Link>
          </h3>
        ))}
      </div>
    </div>
  );
}

export default ServicesList;
