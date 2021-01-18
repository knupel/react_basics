import React, { createContext, Component } from 'react';

const MyContext = createContext();

class Header extends Component {
  static contextType = MyContext;
  render() {
    const temp = this.context;
    let mess = 'Light Theme';
    if (temp === 'dark') {
      mess = 'Dark Theme';
    }
    return (
      <header className={`${temp}-theme`}>
        {/* <h2>{mess}</h2> */}
        <h2>{temp === 'light' ? 'Light' : 'Dark'} Theme</h2>
      </header>
    );
  }
}

class Button extends Component {
  render() {
    console.log('this.context', this.context);
    // return <button className={this.context + '-theme'}>Switch Theme</button>; // old fashion
    return <button className={`${this.context}-theme`}>Switch Theme</button>; // new style
  }
}

// Give the possibility to catch the context value via console log
Button.contextType = MyContext;

class Context0 extends Component {
  render() {
    return (
      <MyContext.Provider value="dark">
        <Header />
        <Button />
      </MyContext.Provider>
    );
  }
}

export default Context0;
