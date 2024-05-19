import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/top-rated">Top Rated</a></li>
          <li><a href="/upcoming">Upcoming</a></li>
        </ul>
      </div>
      <div className="right-section">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search movies..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
