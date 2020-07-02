import React from 'react';

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

export class Site0 extends React.Component {
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
    return (
      <main>
        <form onSubmit={this.method}>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.first_name}
            name="first_name"
            onChange={this.update}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.last_name}
            name="last_name"
            onChange={this.update}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            value={this.state.age}
            name="age"
            onChange={this.update}
          />

          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.update}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.update}
            />
            Male
          </label>

          <br />
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.update}
          >
            <option value="">-- Select destination --</option>
            <option value="Paris">Paris</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Berlin">Berlin</option>
            <option value="Antananarivo">Antananarivo</option>
          </select>

          <br />
          <label>
            <input
              type="checkbox"
              name="is_vegan"
              onChange={this.update}
              checked={this.state.is_vegan}
            />{' '}
            vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="is_kosher"
              onChange={this.update}
              checked={this.state.is_kosher}
            />{' '}
            kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="is_gluten_free"
              onChange={this.update}
              checked={this.state.is_gluten_free}
            />{' '}
            gluten free?
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.first_name} {this.state.last_name}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>

        <p>misc information</p>
        {this.state.is_vegan ? <p>Vegan</p> : ''}
        {this.state.is_kosher ? <p>Kosher</p> : ''}
        {this.state.is_gluten_free ? <p>Gluten</p> : ''}
      </main>
    );
  }
}
