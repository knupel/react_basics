import React, { Component, useContext } from 'react';
import { ThemeContextProvider, ThemeContext } from './themeContext';

function Header(props) {
  const context = useContext(ThemeContext);
  return (
    <header className={`${context.theme}-theme`}>
      <h2>{context.theme === 'light' ? 'Light' : 'Dark'} Theme</h2>
    </header>
  );
}

function Button(props) {
  // by destrucring ThemeContext
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button onClick={toggle} className={`${theme}-theme`}>
      Switch Theme
    </button>
  );
}

class C extends Component {
  render() {
    return (
      <div>
        <ThemeContextProvider>
          <Header />
          <Button />
        </ThemeContextProvider>
      </div>
    );
  }
}

export default C;
