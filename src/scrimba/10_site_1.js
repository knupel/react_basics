import React from 'react';
import { FormRender } from './10_site_1_render';

export class Site1 extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      age: '',
      gender: '',
      destination: '',
      is_vegan: false,
      is_kosher: false,
      is_gluten_free: false
    };
    this.update = this.local_method.bind(this);
  }

  local_method(e) {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    // pass method and date to the function, container or what you want
    return <FormRender update={this.update} data={this.state} />;
  }
}
