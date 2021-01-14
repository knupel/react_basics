import React, { Component } from 'react';

// SUPER COMPONENT
class Toggle extends Component {
  state = {
    on: this.props.setting.on,
    size: this.props.setting.size
  };

  // other way to define props value by default
  // static defaultProps = {
  //   on: false
  // }

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      };
    });
  };

  render() {
    console.log('this.props.setting', this.props.setting);
    console.log('this.props.setting.on', this.props.setting.on);
    return <div>{this.props.func(this.state.on, this.toggle)}</div>;
  }
}

// define props in case there is no props passed to component
Toggle.defaultProps = {
  on: false,
  size: 10
};

// COMPONENT

const setting = (data) => {
  if (typeof data !== 'undefined') return { on: data.on, size: data.size };
  else return { on: false, size: 10 };
};

function CompA(props) {
  return (
    <Toggle
      setting={setting(props.setting)}
      // setting={props.setting}
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
      setting={setting(props.setting)}
      // setting={props.setting}
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
      setting={setting(props.setting)}
      // setting={props.setting}
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
      <CompA title="Menu" setting={{ on: true, size: 12 }}>
        <h6>Signed in as Coder123</h6>
        <li>Your Profile</li>
        <li>Your Repositories</li>
        <li>Your Stars</li>
        <li>Your Gists</li>
      </CompA>
      <CompB
        title="Tu aimes les fonctions classique ?"
        setting={{ on: true, size: 12 }}
      />
      <CompC
        title="Ou tu préfères les fonctions fléchées ?"
        //setting_on={true} // to look the default behavior of the Class
      />
    </div>
  );
}

export default HocAdv;
