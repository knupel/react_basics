import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import ServicesList from './pages/services/ServicesList';
import ServiceDetail from './pages/services/ServiceDetail';

function Funk() {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <ServicesList />
        </Route>
        {/* to call n elem with different id */}
        <Route path="/services/:service_id">
          <ServiceDetail />
        </Route>
      </Switch>
    </div>
  );
}

class C extends Component {
  render() {
    return (
      <Router>
        <Funk />
      </Router>
    );
  }
}

export default C;
