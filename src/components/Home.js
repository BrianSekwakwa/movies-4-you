import React from "react";
import logo from "./movie_db.png";

function Home() {
  return (
    <div className="home">
      <h1>Movies 4 You</h1>
      <p>
        Check out all of the latest and upcoming movies playing at your theaters
      </p>
      <img src={logo} alt="Movie Database Logo" />
    </div>
  );
}

export default Home;
