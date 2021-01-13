import React, { Component } from 'react';

// SUPER COMPONENT
class SuperComp extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      };
    });
  };

  render() {
    const Component = this.props.component;
    return (
      <Component on={this.state.on} toggle={this.toggle} {...this.props} />
    );
  }
}

function improveComponent(component) {
  return function (props) {
    return <SuperComp component={component} {...props} />;
  };
}

// CLASS IMPROVED BY SUPER CLASS
class CompA extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>
          {this.props.on ? 'Hide' : 'Show'} Menu{' '}
        </button>
        <nav style={{ display: this.props.on ? 'block' : 'none' }}>
          <h6>Signed in as Coder123</h6>
          <a>Your Profile</a>
          <a>Your Repositories</a>
          <a>Your Stars</a>
          <a>Your Gists</a>
        </nav>
      </div>
    );
  }
}

class CompB extends Component {
  render() {
    return (
      <div>
        <h3>Tu aimes alors paye ton cœur mec</h3>
        <h1>
          <span onClick={this.props.toggle}>{this.props.on ? '❤️' : '♡'}</span>
        </h1>
      </div>
    );
  }
}

// LAST PART
function HocAdv() {
  const SuperCompA = improveComponent(CompA);
  const SuperCompB = improveComponent(CompB);
  return (
    <div>
      <SuperCompA />
      <SuperCompB />
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
