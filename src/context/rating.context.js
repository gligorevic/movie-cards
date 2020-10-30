import React, { createContext, useReducer } from 'react';
import ratingReducer from '../reducers/rating.reducer';

import MovieService from '../services/MovieService';

export const RatingContext = createContext();
export const DispatchContext = createContext();

export function RatingsProvider(props) {
  const [ratings, dispatch] = useReducer(
    ratingReducer,
    MovieService.getMovies().map(movie => ({ id: movie.id, ratings: [movie.rating], avg: movie.rating }))
  );

  return (
    <RatingContext.Provider value={ratings}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </RatingContext.Provider>
  );
}
