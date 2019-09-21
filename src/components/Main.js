import React, { Component } from "react";
import Upcoming from "./Upcoming";
import NowPlaying from "./NowPlaying";

class Main extends Component {
  state = {
    upcoming: null,
    nowPlaying: null,
    apiKey: "d232aa3b9290fd5231de3c430a851238",
    imageBaseURL: "https://image.tmdb.org/t/p/original"
  };

  componentDidMount() {
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
          });
      });
  }

  render() {
    return (
      <div className="main">
        <Upcoming
          upcoming={this.state.upcoming}
          imageBaseURL={this.state.imageBaseURL}
        />
        <Upcoming
          upcoming={this.state.nowPlaying}
          imageBaseURL={this.state.imageBaseURL}
        />
        {/* <NowPlaying
          nowPlaying={this.state.nowPlaying}
          imageBaseURL={this.state.imageBaseURL}
        /> */}
      </div>
    );
  }
}

export default Main;
