import React from 'react';

export class DropdownDrink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Vin rouge' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    alert('Cette boisson ' + this.state.value + ' est un excelent choix');
    e.preventDefault();
  }

  render() {
    const ref = ['red wine', 'white wine', 'champaign', 'whiskey'];
    const name_fr = ['vin rouge', 'vin blanc', 'champagne', 'whisky'];
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Si vous voulez bien prendre la peine de choisir votre boison madame :
          <select value={this.state.value} onChange={this.handleChange}>
            {' '}
            <option value={ref[0]}>{name_fr[0]}</option>
            <option value={ref[1]}>{name_fr[1]}</option>
            <option value={ref[2]}>{name_fr[2]}</option>
            <option value={ref[3]}>{name_fr[3]}</option>
          </select>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
