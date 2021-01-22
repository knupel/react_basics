import React from 'react';
import servicesData from './servicesData';
import { Link } from 'react-router-dom';

function ServicesList() {
  return (
    <div>
      <h1>Services List Page</h1>
      <div>
        {servicesData.map((elem) => (
          // <p>{elem.name}</p>

          <li>
            <Link to={`/services/${elem._id}/`}>{elem.name}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default ServicesList;
