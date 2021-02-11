import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

// function Funk() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//       </nav>
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/products">
//           <Products />
//       </Switch>
//     </div>
//   );
// }

function Funk() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:product_id">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

class C extends React.Component {
  render() {
    return (
      <Router>
        <Funk />
      </Router>
    );
  }
}

export default C;
