import React, { useLocation } from 'react';
import { Link } from 'react-router-dom';

// NOT WORK
// USE LOCATION
function ServicesList() {
  const location = useLocation();
  console.log(location);

  // {
  //     pathname: "/services",
  //     search: "?something=hello&blah=goodbye",
  //     hash: "",
  //     state: null,
  //     key: "qyfp8w"
  // }
  const services = servicesData.map((service) => (
    <div key={service._id}>
      <h3>
        <Link to={`/services/${service._id}`}>{service.name}</Link> - $
        {service.price}
      </h3>
    </div>
  ));
  return (
    <div>
      <h1>Services List Page</h1>
      {services}
    </div>
  );
}

export default ServicesList;
