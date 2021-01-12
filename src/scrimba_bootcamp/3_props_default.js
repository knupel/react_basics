import React from 'react';

export function PropsDefault() {
  return (
    <div>
      <Card cardColor="red" height={200} width={200} />
      <Card />
      <Card cardColor="green" />
      <CardClass cardColor="red" height={200} width={200} />
      <CardClass />
      <CardClass cardColor="green" />
    </div>
  );
}

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width
  };

  return <div style={styles}></div>;
}

Card.defaultProps = {
  cardColor: 'yellow',
  height: 100,
  width: 100
};

class CardClass extends React.Component {
  static defaultProps = {
    cardColor: 'blue',
    height: 100,
    width: 100
  };

  render() {
    const styles = {
      backgroundColor: this.props.cardColor,
      height: this.props.height,
      width: this.props.width
    };

    return <div style={styles}></div>;
  }
}
