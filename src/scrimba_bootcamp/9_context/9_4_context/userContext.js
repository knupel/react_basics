import React from 'react';

const { Provider, Consumer } = React.createContext();

class UserContextProvider extends React.Component {
  state = {
    user_name: 'stan'
  };

  change_user_name = (user_name) => {
    this.setState({ user_name });
  };

  render() {
    const { user_name } = this.state;
    return (
      <Provider value={{ user_name, change_user_name: this.change_user_name }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
