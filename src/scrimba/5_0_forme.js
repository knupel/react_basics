import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // This trick is here....
  handleChange(event) {
    // better to do like that
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // this.setState({
    //   [event.target.name]: event.target.value
    // });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          // something wrong to see what happen :)
          value={this.state.firstName}
          // value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

class Forme0 extends React.Component {
  render() {
    return <App />;
  }
}

export default Forme0;
