import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile/profile';
import Settings from './pages/profile/settings';
import Info from './pages/profile/info';

function Funk() {
  return (
    <div>
      <div>Super Roots</div>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/pages/about/">about</Link>
      </li>
      <li>
        <Link to="/pages/profile/">profile</Link>
      </li>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/pages/about/">
          <About />
        </Route>

        <Route exact path="/pages/profile/">
          <Profile />
        </Route>

        <Route path="/profile/profile/info">
          <Info />
        </Route>

        <Route path="/profile/profile/settings">
          <Settings />
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
