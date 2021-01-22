import React from 'react';
import servicesData from './servicesData';

function ServicesList() {
  return (
    <div>
      <h1>Services List Page</h1>
      <div>
        {servicesData.map((elem) => (
          <p>{elem.name}</p>
        ))}
      </div>
    </div>
  );
}

export default ServicesList;
