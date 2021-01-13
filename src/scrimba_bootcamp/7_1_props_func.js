import React, { Component } from 'react';

// SUPER COMPONENT
class Toggle extends Component {
  state = {
    on: this.props.setting_on
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      };
    });
  };

  render() {
    return <div>{this.props.func(this.state.on, this.toggle)}</div>;
  }
}

function CompA(props) {
  return (
    <Toggle
      func={function (on, toggle) {
        return (
          <div>
            <button onClick={toggle}>
              {on ? 'Hide' : 'Show'} {props.title}{' '}
            </button>
            <nav style={{ display: on ? 'block' : 'none' }}>
              {props.children}
            </nav>
          </div>
        );
      }}
    />
  );
}

function CompB(props) {
  return (
    <Toggle
      func={function (on, toggle) {
        return (
          <div>
            <h3>{props.title}</h3>
            <h1>
              <span onClick={toggle}>{on ? '❤️' : '♡'}</span>
            </h1>
          </div>
        );
      }}
    />
  );
}

function CompC(props) {
  return (
    <Toggle
      func={(on, toggle) => (
        <div>
          <h3>{props.title}</h3>
          <h1>
            <span onClick={toggle}>{on ? '❤️' : '♡'}</span>
          </h1>
        </div>
      )}
    />
  );
}

// LAST PART
function HocAdv() {
  return (
    <div>
      <CompA title="Menu">
        <h6>Signed in as Coder123</h6>
        <li>Your Profile</li>
        <li>Your Repositories</li>
        <li>Your Stars</li>
        <li>Your Gists</li>
      </CompA>
      <CompB title="Tu aimes les fonctions classique ?" />
      <CompC title="Ou tu préfères les fonctions fléchées ?" />
    </div>
  );
}

export default HocAdv;
