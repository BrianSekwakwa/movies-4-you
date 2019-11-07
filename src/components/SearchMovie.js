import React from "react";
import Navigation from "./Navigation";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
  console.log(props);
  let data;
  let imageBaseURL = "https://image.tmdb.org/t/p/original";

  // Checking to see if the movie data is not empty
  if (props.movieData) {
    const { movieList, movieName } = props.movieData;
    data = (
      <div className="search-movie-cards mg-top--3">
        <h3 className="seatch-movie-cards__header">{movieName} movies</h3>
        {/* Looping through movie data to put them into their own cards */}
        <div className="search-movie-cards__card-group">
          {movieList.map(item => {
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
                <Card className="search-movie-cards__card-group__card-item">
                  <Card.Img
                    variant="top"
                    className="search-movie-cards__card-group__card-item__image"
                    src={`${imageBaseURL}${item.poster_path}`}
                  />
                  <Card.Body className="search-movie-cards__card-group__card-item__rating">
                    <Card.Text className="search-movie-cards__card-group__card-item__rating__text">
                      <i className="fas fa-star"></i> {item.vote_average}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    data = <div className="loader">Loading...</div>;
  }
  return (
    <div>
      <Navigation />
      {data}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData
  };
};

export default connect(mapStateToProps)(Home);
