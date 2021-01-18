import React, { Component } from 'react';

class Mother extends Component {
  render() {
    return (
      <div>
        Pretty function passed like a children props: {this.props.children()}
      </div>
    );
  }
}

function Props2() {
  return (
    <Mother>
      {() => {
        return <div>hello</div>;
      }}
    </Mother>
  );
}

export default Props2;
