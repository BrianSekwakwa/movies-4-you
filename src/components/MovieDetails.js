import React from "react";
import Navigation from "./Navigation";

function MovieDetails(props) {
  console.log(props);
  let details = null;

  if (props.location.state) {
    const {
      backdrop,
      poster,
      overview,
      rating,
      title,
      releaseDate
    } = props.location.state;

    details = (
      <div className="movie-details">
        <img
          className="movie-details__backdrop"
          src={backdrop}
          alt="movie backdrop"
        />
        <div className="movie-details__details">
          <img
            className="movie-details__details__poster"
            src={poster}
            alt="movie poster"
          />
          <div className="movie-details__details__summary">
            <h1>{title}</h1>
            <p>{overview}</p>
            <p>
              <span>Rating:</span> {rating}
            </p>
            <p>
              <span>Release Date:</span> {releaseDate}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    details = <div className="loader">Loading...</div>;
  }

  return (
    <div>
      <Navigation />
      {details}
    </div>
  );
}

export default MovieDetails;
