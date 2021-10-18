import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import { Homepage } from "./pages";
import MovieDetails from "./pages/MovieDetails";

const Routes = (routeProps) => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route
      path="/:id"
      render={(props) => <MovieDetails {...props} imdbId={props.imdbId} />}
    />
  </Switch>
);

export default withRouter(Routes);
