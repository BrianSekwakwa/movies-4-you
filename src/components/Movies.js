import React, { Component } from "react";
import Upcoming from "./Upcoming";
import NowPlaying from "./NowPlaying";

class Movies extends Component {
  state = {
    upcoming: null,
    nowPlaying: null,
    apiKey: "d232aa3b9290fd5231de3c430a851238",
    imageBaseURL: "https://image.tmdb.org/t/p/original"
  };

  componentDidMount() {
    // Searching for the upcoming and now playing movies from the movies database API
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.state.apiKey}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(upcoming => {
        fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.apiKey}&language=en-US&page=1`
        )
          .then(res => res.json())
          .then(nowPlaying => {
            this.setState({
              upcoming: upcoming,
              nowPlaying: nowPlaying
            });
          })
          .catch(err => {
            alert("Could not load data \n", err);
          });
      })
      .catch(err => {
        alert("Could not load data \n", err);
      });
  }

  render() {
    return (
      <div className="movies">
        <Upcoming
          upcoming={this.state.upcoming}
          imageBaseURL={this.state.imageBaseURL}
        />
        <NowPlaying
          nowPlaying={this.state.nowPlaying}
          imageBaseURL={this.state.imageBaseURL}
        />
      </div>
    );
  }
}

export default Movies;
