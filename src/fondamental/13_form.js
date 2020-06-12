import React from 'react';

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.default_message = 'write here';
    this.state = { value: this.default_message };

    this.handle_change = this.handleChange.bind(this);
    this.handle_submit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('e.target.value', e.target.value);
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
    this.setState({ value: this.default_message });
  }

  text_area() {
    return (
      <label>
        Name:
        <textarea value={this.state.value} onChange={this.handle_change} />
      </label>
    );
  }

  text_input() {
    return (
      <label>
        Name:
        <input
          type="text"
          value={this.state.value}
          onChange={this.handle_change}
        />
      </label>
    );
  }

  render() {
    return (
      <form onSubmit={this.handle_submit}>
        {/* {this.text_area()} */}
        {this.text_input()}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
