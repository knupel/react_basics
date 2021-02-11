import React from 'react';
/*
 * That's don't work because I don't understand to attempts data on server.
 */

export class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male'
      }
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.setState({ loading: true });
    // the problem is here... I don't know how make a API with data
    // when I put data on github there is a problem CORS to attemps
    // fetch('../src/data')

    // Raison : l’en-tête CORS « Access-Control-Allow-Origin »
    fetch('https://www.dropbox.com/s/a5bl8i62rs00ln8/starwars.json?dl=0')
      .then((responde) => responde.json())
      .then((data) => {
        this.setState({
          loading: false,
          charactere: data
        });
      });
  }

  render() {
    const info = this.state.loading ? 'loading...' : this.state.character.name;
    return (
      <div>
        <p>{info}</p>
      </div>
    );
  }
}
