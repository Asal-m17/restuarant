import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import Card from './Card';
import RestaurantImageUrl from '../pages/restaurant.png';
import './RestaurantList.css'; 

const RestaurantList = () => {
  const restaurants = [
    { id: 1, name: 'Restaurant A', description: 'Best Italian food', reviews: 120, rating: 5, isOpen: true },
    { id: 2, name: 'Restaurant B', description: 'Traditional Persian cuisine', reviews: 80, rating: 4, isOpen: false },
    { id: 3, name: 'Restaurant C', description: 'Great seafood dishes', reviews: 145, rating: 3, isOpen: true },
  ];

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="card" style={{ margin: '10px', width: '18rem' }}>
          <img 
            src={RestaurantImageUrl} 
            className="card-img-top" 
            alt={restaurant.name} 
          />
          <div className="card-body">
            <h5 className="card-title">{restaurant.name}</h5>
            <p className="card-text">{restaurant.description}</p>
            
            <StarRating rating={restaurant.rating} />
            <p>{restaurant.reviews} Reviews</p>
            <p className={restaurant.isOpen ? 'open' : 'closed'}>
              {restaurant.isOpen ? 'Open Now' : 'Closed'}
            </p>

            <Link to={`/restaurant/${restaurant.id}`} className="btn btn-primary mt-2">View Details</Link>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;

  