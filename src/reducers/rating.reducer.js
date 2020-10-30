const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state.map(movie =>
        movie.id === action.payload.id
          ? {
              ...movie,
              ratings: [...movie.ratings, action.payload.value],
              avg: [...movie.ratings, action.payload.value].reduce((a, b) => a + b) / (movie.ratings.length + 1),
            }
          : movie
      );
    case 'DELETE_MOVIE':
      return state.filter(rating => rating.id !== action.payload);
    default:
      return state;
  }
};
export default reducer;
