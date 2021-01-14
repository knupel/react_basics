import React, { PureComponent, Component } from 'react';

class Master extends PureComponent {
  render() {
    console.log('Master move');
    // return <div>Master {this.props.children}</div>;
    return (
      <div>
        <Jedi></Jedi>
      </div>
    );
  }
}

class Jedi extends PureComponent {
  render() {
    console.log('Jedi move');
    return (
      <div>
        <Padawan></Padawan>
      </div>
    );
    // return <div>Jedi {this.props.children}</div>;
  }
}

class Padawan extends PureComponent {
  render() {
    console.log('Padawan move');
    // return <div>Padawan {this.props.children}</div>;
    return (
      <div>
        <Awaken></Awaken>
      </div>
    );
  }
}

class Awaken extends PureComponent {
  render() {
    console.log('Awaken move');
    return <div>The last hope</div>;
    // return <div>Awaken {this.props.children}</div>;
  }
}

class Update1 extends Component {
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
        <Master all={this.state.m}></Master>
        <Master all={this.state.m}></Master>
        {/* <Master all={this.state.m}>
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
        </Master> */}
      </div>
    );
  }
}

export default Update1;
