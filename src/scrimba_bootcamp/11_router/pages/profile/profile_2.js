import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import Settings from './settings_2';
import Info from './info_2';

/**
 * useRouteMatch return a bad path... so it's not possible to use it
 *
 *
 * https://reacttraining.com/blog/react-router-v5-1/#useroutematch
 */
function Profile() {
  const { path, url } = useRouteMatch();
  console.log('Profile() path:', path);
  console.log('Profile() url:', url);
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${url}/info`}>Profile Info</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>Profile Settings</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/info`}>
          <Info />
        </Route>

        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;

// import React from 'react';
// import { Link, Switch, Route } from 'react-router-dom';

// import Settings from './settings_2';
// import Info from './info_2';

// function Profile() {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <ul>
//         <li>
//           <Link to="/profile/profile/info/">Profile Info</Link>
//         </li>
//         <li>
//           <Link to="/profile/profile/settings/">Profile Settings</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route path="/profile/profile/info">
//           <Info />
//         </Route>

//         <Route path="/profile/profile/settings">
//           <Settings />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default Profile;
