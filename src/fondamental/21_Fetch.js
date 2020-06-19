import React from 'react';

export class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      character: {
        // name: 'Luke Skywalker',
        // height: '172',
        // mass: '77',
        // hair_color: 'blond',
        // skin_color: 'fair',
        // eye_color: 'blue',
        // birth_year: '19BBY',
        // gender: 'male'
      }
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
    fetch('https://swapi.co/api/people/1')
      .then((responde) => responde.json())
      .then((data) => {
        this.setState({
          charactere: data
        });
      });
  }

  render() {
    // const info = this.state.character.name;
    return (
      <div>
        <p>{this.state.character.name}</p>
      </div>
    );
  }
}
