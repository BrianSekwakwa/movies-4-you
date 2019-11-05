import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import SearchMovie from "./components/SearchMovie";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/SearchMovie" component={SearchMovie} />
          <Route path="/MovieDetails" component={MovieDetails} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
