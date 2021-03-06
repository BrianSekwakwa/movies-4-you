import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Upcoming(props) {
  const { imageBaseURL, upcoming } = props;
  let data = null;

  if (upcoming !== null) {
    const results = upcoming.results;
    data = (
      <div className="movie-cards__card-group">
        {results.map(item => {
          return (
            <Link
              to={{
                pathname: "/MovieDetails",
                state: {
                  backdrop: `${imageBaseURL}${item.backdrop_path}`,
                  poster: `${imageBaseURL}${item.poster_path}`,
                  title: item.title,
                  overview: item.overview,
                  rating: item.vote_average,
                  releaseDate: item.release_date
                }
              }}
              key={item.id}
            >
              <Card className="movie-cards__card-group__card-item hover">
                <Card.Img
                  variant="top"
                  className="movie-cards__card-group__card-item__image"
                  src={`${imageBaseURL}${item.poster_path}`}
                />
                <Card.Body className="movie-cards__card-group__card-item__rating">
                  <Card.Text className="movie-cards__card-group__card-item__rating__text">
                    <i className="fas fa-star"></i> {item.vote_average}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
    );
  } else {
    data = <p className="movie-cards__loading">Loading...</p>;
  }

  return (
    <div className="movie-cards">
      <h3 className="movie-cards__header">UpComing</h3>
      {data}
    </div>
  );
}

export default Upcoming;
