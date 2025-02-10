import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>
      &#9733;
    </span>
  ));

  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < rating ? 'red' : 'gray' }}>★</span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;