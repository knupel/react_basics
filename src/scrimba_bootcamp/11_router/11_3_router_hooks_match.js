import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Profile from './pages/profile/profile_2';
import Settings from './pages/profile/settings_2';
import Info from './pages/profile/info_2';

function Header() {
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
    </div>
  );
}

function Funk() {
  const { path, url } = useRouteMatch();
  console.log('Funk() path:', path);
  console.log('Funk() url', url);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/pages/about/">
          <About />
        </Route>
        {/* here we change profile to user */}
        <Route path="/pages/profile/">
          <Profile />
        </Route>

        {/* <Route path={`${path}/info`}>
          <Info />
        </Route>

        <Route path={`${path}/settings`}>
          <Settings />
        </Route> */}

        {/* <Route path="/profile/profile/info">
          <Info />
        </Route>

        <Route path="/profile/profile/settings">
          <Settings />
        </Route> */}
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
