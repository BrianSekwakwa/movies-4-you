export const searchMovie = movieName => {
  return (dispatch, getState) => {
    dispatch({
      type: "SOMETHING",
      payload: movieName
    });
  };
};
