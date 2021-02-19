import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Movies from "./views/Movies";
import Layout from "./Components/Layout";
import SearchMovies from "./views/SearchMovies";

const App = () => (
  <>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shows/:showID" component={Movies} />
        <Route path="/shows/" component={SearchMovies} />
      </Switch>
    </Layout>
  </>
);
export default App;
