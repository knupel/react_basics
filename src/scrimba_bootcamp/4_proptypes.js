import React from 'react';
import PropTypes from 'prop-types';

export function PropsTypeDefault() {
  return (
    <div>
      <Card cardColor="purple" height={200} width={200} />
      <Card />
      <Card cardColor="green" />
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

Card.propTypes = {
  cardColor: PropTypes.oneOf(['yellow', 'red', 'green']).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};
