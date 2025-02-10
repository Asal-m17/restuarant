import React, { useState } from 'react';
import './ReviewModal.css';

const ReviewModal = ({ onClose, onAddReview }) => {
  const [newReview, setNewReview] = useState({
    food: 0,
    service: 0,
    ambiance: 0,
    overall: 0,
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.food && newReview.service && newReview.ambiance && newReview.overall && newReview.comment) {
      onAddReview(newReview); 
      onClose(); 
    } else {
      alert('Please fill out all fields'); 
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="food" className="form-label">Food</label>
            <input
              type="number"
              id="food"
              name="food"
              value={newReview.food}
              onChange={handleChange}
              min="1"
              max="5"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="service" className="form-label">Service</label>
            <input
              type="number"
              id="service"
              name="service"
              value={newReview.service}
              onChange={handleChange}
              min="1"
              max="5"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ambiance" className="form-label">Ambiance</label>
            <input
              type="number"
              id="ambiance"
              name="ambiance"
              value={newReview.ambiance}
              onChange={handleChange}
              min="1"
              max="5"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="overall" className="form-label">Overall</label>
            <input
              type="number"
              id="overall"
              name="overall"
              value={newReview.overall}
              onChange={handleChange}
              min="1"
              max="5"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">Comment</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-custom-red">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
