import React, { useState, useEffect } from 'react';
import ReviewModal from '../components/ReviewModal';
import StarRating from '../components/StarRating';
import RestaurantImage from './restaurant.png';
import './Restaurant.css';

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numGuests, setNumGuests] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [isReservationValid, setIsReservationValid] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const sampleRestaurant = {
        id: 1,
        name: 'Amir Jooje',
        description: 'Lorem ipsum dolor sit amet.',
        address: {
          country: 'Iran',
          city: 'Karaj',
          street: 'Bahar',
        },
        type: 'Fast Food',
        startTime: '08:00',
        endTime: '21:00',
        maxSeatsNumber: 6,
        averageRating: {
          overall: 4,
        },
        reviews: [
          {
            id: 1,
            food: 4,
            service: 5,
            ambiance: 4,
            overall: 4,
            comment: 'Great food!',
          },
        ],
      };
      setRestaurant(sampleRestaurant);
      setReviews(sampleRestaurant.reviews);
    }, 1000);
  }, []);

  useEffect(() => {
    validateReservation();
  }, [numGuests, reservationDate, reservationTime]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    console.log("Updated Reviews:", [...reviews, { ...newReview, id: reviews.length + 1 }]);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'numGuests') setNumGuests(value);
    if (id === 'reservationDate') setReservationDate(value);
  };

  const handleRadioChange = (e) => {
    setReservationTime(e.target.value);
  };

  const validateReservation = () => {
    if (numGuests && reservationDate && reservationTime) {
      setIsReservationValid(true);
    } else {
      setIsReservationValid(false);
    }
  };

  const handleCompleteReservation = (e) => {
    e.preventDefault();
    if (isReservationValid) {
      setMessage('Reservation successfully completed!');
    } else {
      setMessage('Please fill all fields correctly.');
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <img src={RestaurantImage} alt={restaurant.name} className="img-fluid mb-3" />
      <p>{restaurant.description}</p>
      <p><strong>Address:</strong> {restaurant.address.street}, {restaurant.address.city}, {restaurant.address.country}</p>
      <p><strong>Type:</strong> {restaurant.type}</p>
      <p><strong>Hours:</strong> {restaurant.startTime} - {restaurant.endTime}</p>

      <div>
      <h2>Reservation Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="numGuests" className="form-label">Number of Guests</label>
          <select
            id="numGuests"
            value={numGuests}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select number of guests</option>
            {[...Array(restaurant.maxSeatsNumber).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>{n + 1}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="reservationDate" className="form-label">Reservation Date</label>
          <input
            type="date"
            id="reservationDate"
            value={reservationDate}
            onChange={handleInputChange}
            className="form-control"
            min={new Date().toISOString().split('T')[0]} 
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Reservation Time</label>
          <div>
            {['08:00', '12:00', '18:00'].map((time) => (
              <div key={time} className="form-check">
                <input
                  type="radio"
                  id={`time-${time}`}
                  name="reservationTime"
                  value={time}
                  checked={reservationTime === time}
                  onChange={handleRadioChange}
                  className="form-check-input"
                  required
                />
                <label htmlFor={`time-${time}`} className={`form-check-label ${reservationTime === time ? 'text-primary' : ''}`}>
                  {time}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={`btn ${isReservationValid ? 'btn-danger' : 'btn-secondary'}`}
          onClick={handleCompleteReservation}
          disabled={!isReservationValid}
        >
          Complete Reservation
        </button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
      <div>
        <h2>Reviews</h2>
        <StarRating rating={restaurant.averageRating.overall} />
        <p><strong>Total Reviews:</strong> {reviews.length}</p>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <StarRating rating={review.overall} />
            <p><strong>Food:</strong> {review.food} / 5</p>
            <p><strong>Service:</strong> {review.service} / 5</p>
            <p><strong>Ambiance:</strong> {review.ambiance} / 5</p>
            <p><strong>Overall:</strong> {review.overall} / 5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      <button onClick={handleOpenModal} className="btn btn-secondary mt-3">
        Add Review
      </button>

      {isModalOpen && (
        <ReviewModal
          onClose={handleCloseModal}
          onAddReview={handleAddReview}
        />
      )}
    </div>
  );
};

export default Restaurant;