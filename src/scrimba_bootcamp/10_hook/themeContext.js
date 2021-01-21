import React, { Component } from 'react';
const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: 'dark'
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === 'light' ? 'dark' : 'light'
      };
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggle: this.toggle }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContextProvider, ThemeContext };
