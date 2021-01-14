import React, { Component } from 'react';

class Master extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.all === this.props.all) {
      return false;
    }
    return true;
  }
  render() {
    console.log('Master move');
    return (
      <div>
        <div>Master</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class Jedi extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.all === this.props.all) {
      return false;
    }
    return true;
  }
  render() {
    console.log('Jedi move');
    return (
      <div>
        <div>Jedi</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class Padawan extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.all === this.props.all) {
      return false;
    }
    return true;
  }
  render() {
    console.log('Padawan move');
    return (
      <div>
        <div>Padawan</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class Awaken extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.all === this.props.all) {
      return false;
    }
    return true;
  }
  render() {
    console.log('Awaken move');
    return (
      <div>
        <div>Awaken</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class Update0 extends Component {
  state = { m: 0, j: 0, p: 0, a: 0 };

  inc_m = () => this.setState((prevState) => ({ m: prevState.m++ }));
  inc_j = () => this.setState((prevState) => ({ j: prevState.j++ }));
  inc_p = () => this.setState((prevState) => ({ p: prevState.p++ }));
  inc_a = () => this.setState((prevState) => ({ a: prevState.a++ }));

  render() {
    console.log(this.state.m, this.state.j, this.state.p, this.state.a);
    return (
      <div>
        <button onClick={this.inc_m}>Master all</button>
        <button onClick={this.inc_j}>Jedi all</button>
        <button onClick={this.inc_p}>Padawan all</button>
        <button onClick={this.inc_a}>Awaken all</button>
        <Master all={this.state.m}>
          <Jedi all={this.state.j}>
            <Padawan all={this.state.p}>
              <Awaken all={this.state.a}></Awaken>
              <Awaken all={this.state.a}></Awaken>
            </Padawan>
            <Padawan all={this.state.p}>
              <Awaken all={this.state.a}></Awaken>
              <Awaken all={this.state.a}></Awaken>
            </Padawan>
          </Jedi>
          <Jedi all={this.state.j}>
            <Padawan all={this.state.p}>
              <Awaken all={this.state.a}></Awaken>
              <Awaken all={this.state.a}></Awaken>
            </Padawan>
            <Padawan all={this.state.p}>
              <Awaken all={this.state.a}></Awaken>
              <Awaken all={this.state.a}></Awaken>
            </Padawan>
          </Jedi>
        </Master>
      </div>
    );
  }
}

export default Update0;
