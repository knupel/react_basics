import React from 'react';
import {
  ThemeContextProvider,
  ThemeContextConsumer
} from './9_0_0_themeContext';

function Header(props) {
  return (
    <ThemeContextConsumer>
      {(theme) => (
        <header className={`${theme}-theme`}>
          <h2>{theme === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

function Button(props) {
  return (
    <ThemeContextConsumer>
      {(theme) => <button className={`${theme}-theme`}>Switch Theme</button>}
    </ThemeContextConsumer>
  );
}

class Context2 extends Component {
  render() {
    return (
      <div>
        <ThemeContextProvider value="dark">
          <Header />
          <Button />
          <ThemeContextConsumer>
            {(temp) => <Button data={temp} />}
          </ThemeContextConsumer>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default Context2;
