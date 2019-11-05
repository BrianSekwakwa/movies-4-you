import React from "react";
import Navigation from "./Navigation";

function MovieDetails(props) {
  console.log(props);
  let imageBackdrop = null;
  let imagePoster = null;

  if (props.location.state) {
    const { backdrop, poster } = props.location.state;
    imageBackdrop = backdrop;
    imagePoster = poster;
  }
  return (
    <div className="movie-details">
      <Navigation />
      <img
        className="movie-details__backdrop"
        src={imageBackdrop}
        alt="movie backdrop"
      />
      <div className="movie-details__details">
        <img
          className="movie-details__details__poster"
          src={imagePoster}
          alt="movie poster"
        />
        <div className="movie-details__details__summary">
          some movie details are going to be on this component
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
