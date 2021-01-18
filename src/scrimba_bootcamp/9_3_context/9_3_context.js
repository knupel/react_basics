import React from 'react';
import { ThemeContextProvider, ThemeContextConsumer } from './themeContext';

function Header(props) {
  return (
    <ThemeContextConsumer>
      {(truc) => (
        <header className={`${truc.theme}-theme`}>
          <h2>{truc.theme === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

class Button extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {(truc) => (
          <button className={`${truc.theme}-theme`} onClick={truc.toggle}>
            Switch Theme
          </button>
        )}
      </ThemeContextConsumer>
    );
  }
}

class Context3 extends React.Component {
  render() {
    return (
      <div>
        <ThemeContextProvider value="dark">
          <Header />
          <Button></Button>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default Context3;
