import React, { useCallback, useContext, useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieAddDialog from './MovieAddDialog';
import { DispatchContext } from '../../context/rating.context';

export default () => {
  const [movies, setMovies] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const openDialog = useCallback(() => {
    setOpenAddDialog(true);
  }, [setOpenAddDialog]);

  const closeDialog = useCallback(() => {
    setOpenAddDialog(false);
  }, [setOpenAddDialog]);

  const addNewMovie = useCallback(movie => {
    const id = movies[movies.length - 1].id + 100;
    dispatch({ type: 'ADD_NEW_MOVIE', payload: { id } });
    setMovies(movies => [...movies, { id, ...movie }]);

    setOpenAddDialog(false);
  });

  const deleteMovie = useCallback(id => {
    setMovies(movies.filter(m => m.id !== id));
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  });

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} openAddDialog={openDialog} deleteMovie={deleteMovie} />
          {openAddDialog && <MovieAddDialog closeAddDialog={closeDialog} addNewMovie={addNewMovie} />}
        </div>
      </div>
    </div>
  );
};
