import React from 'react';
import SearchMovies from './search_movies';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
    </div>
  );
}
