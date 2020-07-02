import React from 'react';

export function FormRender(props) {
  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="First Name"
          // change from this.state... to props.data...
          value={props.data.first_name}
          name="first_name"
          // change this.update tp props.update
          onChange={props.update}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={props.data.last_name}
          name="last_name"
          onChange={props.update}
        />
        <br />
        <input
          type="text"
          placeholder="Age"
          value={props.data.age}
          name="age"
          onChange={props.update}
        />

        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === 'female'}
            onChange={props.update}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === 'male'}
            onChange={props.update}
          />
          Male
        </label>

        <br />
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.update}
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
            onChange={props.update}
            checked={props.data.is_vegan}
          />{' '}
          vegan?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="is_kosher"
            onChange={props.update}
            checked={props.data.is_kosher}
          />{' '}
          kosher?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="is_gluten_free"
            onChange={props.update}
            checked={props.data.is_gluten_free}
          />{' '}
          gluten free?
        </label>
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {props.data.first_name} {props.data.last_name}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>

      <p>misc information</p>
      {props.data.is_vegan ? <p>Vegan</p> : ''}
      {props.data.is_kosher ? <p>Kosher</p> : ''}
      {props.data.is_gluten_free ? <p>Gluten</p> : ''}
    </main>
  );
}
