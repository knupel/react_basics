import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Settings from './settings';
import Info from './info';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to="/profile/profile/info/">Profile Info</Link>
        </li>
        <li>
          <Link to="/profile/profile/settings/">Profile Settings</Link>
        </li>
      </ul>
      {/* <Switch>
        <Route path="/profile/profile/info">
          <Info />
        </Route>

        <Route path="/profile/profile/settings">
          <Settings />
        </Route>
      </Switch> */}
    </div>
  );
}

export default Profile;
