import React from "react";
import Card from "react-bootstrap/Card";

function NowPlaying(props) {
  const { imageBaseURL, nowPlaying } = props;
  let data = null;

  console.log(nowPlaying);
  if (nowPlaying !== null) {
    const results = nowPlaying.results;
    data = (
      <div className="movie-cards__card-group">
        {results.map(item => {
          return (
            <Card className="movie-cards__card-group__card-item" key={item.id}>
              <Card.Img
                variant="top"
                className="movie-cards__card-group__card-item__image"
                src={`${imageBaseURL}${item.poster_path}`}
              />
              <Card.Body className="movie-cards__card-group__card-item__rating">
                <Card.Text className="movie-cards__card-group__card-item__rating__text">
                  star {item.vote_average}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  } else {
    data = <p className="movie-cards__loading">Loading...</p>;
  }

  return (
    <div className="movie-cards mg-top--3">
      <h3 className="movie-cards__header">Now Playing</h3>
      {data}
    </div>
  );
}

export default NowPlaying;
