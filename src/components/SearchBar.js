import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity(''); // Clear the input field after submission
  };

  return (
    <form className="search-bar d-flex justify-content-center align-items-center my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control search-input me-2"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: '12px',
          borderRadius: '30px',
          background: '#2b2b44',
          color: '#fff',
          border: '1px solid #444',
          width: '300px',
        }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{
          borderRadius: '30px',
          padding: '10px 20px',
          background: 'linear-gradient(to right, #1e90ff, #00bcd4)',
          border: 'none',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
