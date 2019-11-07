export const searchMovie = movieName => {
  return (dispatch, getState) => {
    if (movieName) {
      // Removing spaces in front and back of the movie name string
      movieName = movieName.trim();

      // Fetching data from the movie API based on the movieName variable string
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d232aa3b9290fd5231de3c430a851238&language=en-US&query=${movieName}&page=1&include_adult=false`
      )
        .then(res => res.json())
        .then(data => {
          if (data.errors) {
            // Caching the error if someone submitted spaces for the query name
            dispatch({
              type: "ERROR",
              payload: data.errors[0]
            });
          } else {
            // Sending movie data from API to the reducer
            dispatch({
              type: "LOADED",
              payload: {
                movieList: data.results,
                movieName: movieName
              }
            });
          }
        })
        .catch(err => {
          // Dispatching an error if data could not be fetched from the API
          dispatch({
            type: "ERROR",
            payload: err
          });
        });
    } else {
      // Dispatching an error if user submitted an empty value (null)
      dispatch({
        type: "ERROR",
        payload: "Cannot search for empty value"
      });
    }
  };
};
