// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import TopRatedPage from './Components/TopRatedPage';
import UpcomingPage from './Components/UpcomingPage';
import MovieDetailPage from './Components/MovieDetailPage';
import SearchedMoviePage from './Components/SearchedMoviePage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
         <Route path="/movie/:id" element={<MovieDetailPage />} /> 
          <Route path="/search/:query" element={<SearchedMoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
