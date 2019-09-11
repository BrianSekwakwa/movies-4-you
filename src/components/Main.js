import React, { Component } from "react";
import Upcoming from "./Upcoming";
import NowPlaying from "./NowPlaying"

class Main extends Component {
  state = {
    upcoming: null,
    nowPlaying: null
  };

  componentDidMount() {
    // We will fetch the upcoming movies data here
    // We will also fetch the now playing movies data here
  }

  render() {
    return (
      <div>
        <Upcoming />
        <NowPlaying />
      </div>
    );
  }
}

export default Main;
