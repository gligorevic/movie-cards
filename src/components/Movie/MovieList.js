import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const MovieList = ({ movies, openAddDialog, deleteMovie }) => {
  return (
    <div className="card-deck">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} deleteMovie={() => deleteMovie(movie.id)} />
      ))}
      <div className="movie-card" onClick={openAddDialog}>
        <div className="movie-card card movie-add">
          <div className="movie-add__plus">&#43;</div>
        </div>
      </div>
    </div>
  );
};

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
  openAddDialog: PropTypes.func,
  deleteMovie: PropTypes.func,
};

export default MovieList;
