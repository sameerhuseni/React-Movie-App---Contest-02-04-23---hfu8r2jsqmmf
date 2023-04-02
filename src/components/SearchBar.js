import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query=${searchTerm}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
