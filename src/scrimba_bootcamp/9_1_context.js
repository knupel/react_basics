import React, { createContext, Component } from 'react';

const MyContext = createContext();

function Header() {
  return (
    <MyContext.Consumer>
      {(truc) => (
        <header className={`${truc}-theme`}>
          <h2>{truc === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      )}
    </MyContext.Consumer>
  );
}

function Button(props) {
  console.log('props.data', props.data);
  return <button className={`${props.data}-theme`}>Switch Theme</button>;
}

class Context1 extends Component {
  render() {
    return (
      <div>
        <MyContext.Provider value="dark">
          <Header />
          <Button />
          <MyContext.Consumer>
            {(temp) => <Button data={temp} />}
          </MyContext.Consumer>
        </MyContext.Provider>
        {/*  */}
      </div>
    );
  }
}

export default Context1;
