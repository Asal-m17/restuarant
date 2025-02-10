import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ restaurant }) => {
  const isOpen = restaurant && restaurant.startTime ? restaurant.startTime.split(':')[0] < '12' : false;

  return (
    <div className={`card ${isOpen ? 'open' : 'closed'}`}>
      <p>Trust. We are the Best!</p>
    </div>
  );
};

Card.propTypes = {
  restaurant: PropTypes.shape({
    startTime: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string
  })
};

Card.defaultProps = {
  restaurant: {
    startTime: '00:00',
    description: 'No description available.',
    name: 'Unknown Restaurant'
  }
};

export default Card;