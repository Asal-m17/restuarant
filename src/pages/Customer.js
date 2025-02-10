import React from 'react';
import './Customer.css'; 

const Customer = () => {
  
  const handleLogout = () => {
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <div className="customer">
      <h1>Customer Information</h1>
      <p>Email: asalmanavi@gmail.com</p>
      <p>Address: Emam Ali St, Mashhad , Iran</p>
      <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Customer;