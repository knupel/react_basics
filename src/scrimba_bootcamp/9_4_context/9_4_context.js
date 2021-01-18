import React from 'react';

import { UserContextProvider, UserContextConsumer } from './userContext';

function Header() {
  return (
    <header>
      <UserContextConsumer>
        {/* {(truc) => <p>Welcome, {truc.user_name}!</p>} */}
        {({ user_name }) => <p>Welcome, {user_name}!</p>}
      </UserContextConsumer>
    </header>
  );
}

class Module extends React.Component {
  state = {
    new_user_name: ''
  };

  handle_change = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <UserContextConsumer>
        {({ user_name, change_user_name }) => (
          <div>
            <p className="main">Nothing happen, {user_name} is borring</p>
            <input
              type="text"
              name="new_user_name"
              placeholder="New username"
              value={this.state.new_user_name}
              onChange={this.handle_change}
            />
            <button onClick={() => change_user_name(this.state.new_user_name)}>
              Change Username
            </button>
          </div>
        )}
      </UserContextConsumer>
    );
  }
}

class Context4 extends React.Component {
  render() {
    return (
      <UserContextProvider>
        <Header />
        <Module />
      </UserContextProvider>
    );
  }
}

export default Context4;
