import React from 'react';
import prod from '../data/data_product';
import { useParams } from 'react-router-dom';

// function ProductDetail(props) {
//   const params = useParams();
//   // const params = useParams();

//   const what = prod.find((elem) => elem.id === params.product_id);

//   return (
//     <div>
//       <div>
//         <h1>PRODUCT DETAIL: {what.name}</h1>
//         <p>{what.description}</p>
//       </div>
//     </div>
//   );
// }

function ProductDetail(props) {
  const { product_id } = useParams();
  console.log('product_id', product_id);

  // const what = prod.find((elem) => elem.id === params.product_id);

  return (
    <div>
      <div>
        <h1>PRODUCT DETAIL: {product_id}</h1>
      </div>
    </div>
  );
}
export default ProductDetail;
