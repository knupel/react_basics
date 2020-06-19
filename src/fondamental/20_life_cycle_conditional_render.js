import React, { Component } from 'react';
import {
  ConditionalV0,
  ConditionalV1,
  ConditionalV2
} from './20_life_cycle_component_confitional';

export class ConditionalRender extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    return (
      <div>
        {/* <ConditionalV0 isLoading={this.state.isLoading} /> */}
        {/* <ConditionalV1 isLoading={this.state.isLoading} /> */}
        {this.state.isLoading ? <h1>Loading...</h1> : <ConditionalV2 />}
      </div>
    );
  }
}
