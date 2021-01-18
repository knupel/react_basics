import React, { Component } from 'react';

// SUPER COMPONENT
class SuperComp extends Component {
  // we cannot named the props param with the same name as SuperComp state name
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
    const { component: C, setting_on, ...props } = this.props;
    return <C on={this.state.on} toggle={this.toggle} {...props} />;
    // const C = this.props.component;
    // return (
    //   <C on={this.state.on} toggle={this.toggle} {...this.props} />
    // );
  }
}

function improveComponent(component, setting) {
  return function (props) {
    return (
      <SuperComp component={component} setting_on={setting.on} {...props} />
    );
  };
}

// CLASS IMPROVED BY SUPER CLASS
function CompA(props) {
  return (
    <div>
      <button onClick={props.toggle}>
        {props.on ? 'Hide' : 'Show'} {props.title}{' '}
      </button>
      <nav style={{ display: props.on ? 'block' : 'none' }}>
        {props.children}
      </nav>
    </div>
  );
}

function CompB(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h1>
        <span onClick={props.toggle}>{props.on ? '❤️' : '♡'}</span>
      </h1>
    </div>
  );
}

// LAST PART
function HocAdv() {
  // const setting_A = { on: true };
  // const SuperCompA = improveComponent(CompA, setting_A);
  const SuperCompA = improveComponent(CompA, { on: true });
  const SuperCompB = improveComponent(CompB, { on: false });
  return (
    <div>
      <SuperCompA title="Menu">
        <h6>Signed in as Coder123</h6>
        <li>Your Profile</li>
        <li>Your Repositories</li>
        <li>Your Stars</li>
        <li>Your Gists</li>
      </SuperCompA>
      <SuperCompB title="Tu aimes alors paye ton cœur mec" />
    </div>
  );
}

function func_to_class(component) {
  return function (props) {
    return <SuperComp component={component} {...props} />;
  };
}

const C = func_to_class(HocAdv);
export default C;
