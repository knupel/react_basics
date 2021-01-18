import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: 'dark'
  };

  toggle = () => {
    // this.setState((prevState) => ({ theme: 'light' ? 'dark' : 'light' }));
    this.setState((prevState) => {
      return {
        theme: prevState.theme === 'light' ? 'dark' : 'light'
      };
    });
  };
  render() {
    return (
      <Provider value={{ theme: this.state.theme, toggle: this.toggle }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
