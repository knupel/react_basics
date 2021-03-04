import React from 'react';
import SpeedTyping from './speed_typing/0_main_speed_typing';
import SearchMovies from './search_movies/0_main_search_movies.js';

export default function Main() {
  return (
    <React.StrictMode>
      {/* <SpeedTyping /> */}
      <SearchMovies />
    </React.StrictMode>
  );
}
