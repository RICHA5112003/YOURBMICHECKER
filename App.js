// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note: Switch is replaced by Routes
import Homepage from './components/Homepage';
import BMIcalculator from './components/BMIcalculator';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<BMIcalculator />} />
      </Routes>
    </Router>
  );
};

export default App;
