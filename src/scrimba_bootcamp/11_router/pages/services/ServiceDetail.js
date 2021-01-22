import React from 'react';
import { useParams } from 'react-router-dom';

import servicesData from './servicesData';

function ServiceDetail(props) {
  const params = useParams();
  console.log('params', params);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const what = servicesData.find(
    (service) => service._id === params.service_id
  );
  return (
    <div>
      <h1>DETAIL SERVICE: {what.name}</h1>
      <p>{what.description}</p>
    </div>
  );
}

export default ServiceDetail;
