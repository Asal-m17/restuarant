import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Restaurant from './pages/Restaurant';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;



