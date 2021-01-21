// NEW FASHION
import React, { useState } from 'react';
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('dark');

  function toggle() {
    setTheme((arg) => (arg === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };

// OLD FASHION
// import React, { Component } from 'react';
// const ThemeContext = React.createContext();

// class ThemeContextProvider extends Component {
//   state = {
//     theme: 'dark'
//   };

//   toggle = () => {
//     this.setState((prevState) => {
//       return {
//         theme: prevState.theme === 'light' ? 'dark' : 'light'
//       };
//     });
//   };

//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ theme: this.state.theme, toggle: this.toggle }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

// export { ThemeContextProvider, ThemeContext };
