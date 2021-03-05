import React, { useState } from 'react';
import MovieCard from './MovieCard.js';

export default function SearchMovies() {
  const [query, set_query] = useState('');
  const [movies, set_movies] = useState([]);

  const search_movies = async (event) => {
    event.preventDefault();
    console.log('submit');
    // teacher API key
    // const url = `https://api.themoviedb.org/3/search/movie?
    // api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&
    // include_adult=false`;

    // my API key who don't work :(
    const url = `https://api.themoviedb.org/3/search/movie?
    api_key=d408c72542b4bf19f9f5d20d784f1008&language=en-US${query}&page=1&
    include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      set_movies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={search_movies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies === 'undefined' ? (
          movies
            .filter((movie) => movie.poster_path)
            .map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
