import React, { useCallback, useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieAddDialog from './MovieAddDialog';

export default () => {
  const [movies, setMovies] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);

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
    setMovies(movies => [
      ...movies,
      { id: movies[movies.length - 1].id + 100, ...movie, imageUrl: '../images/Kingsglaive_Final_Fantasy_XV.jpg' },
    ]);
    setOpenAddDialog(false);
  });

  const deleteMovie = useCallback(id => {
    setMovies(movies.filter(m => m.id !== id));
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
