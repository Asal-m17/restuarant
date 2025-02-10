import React from 'react';
import RestaurantList from '../components/RestaurantList';
import Hero from '../components/Hero';

const restaurants = [
  {
    id: 1,
    name: 'Amir Jooje',
    type: 'Fast Food',
    description: 'Best fast food in town',
    isOpen: true,
  },
];


const Home = () => {
  const restaurants = [
    { id: 1, name: 'Restaurant A', open: true, reviews: 10 },
    { id: 2, name: 'Restaurant B', open: false, reviews: 5 },
    { id: 3, name: 'Restaurant C', open: true, reviews: 8 }
  ];

  return (
    <div className="home">
      <Hero />
      <h1 className="text-center pt-4">Top Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Home;

