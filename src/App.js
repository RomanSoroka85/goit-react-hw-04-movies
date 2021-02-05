import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Shows from "./views/Shows";
import ShowDetals from "./views/ShowDetals";

import Layout from "./Components/Layout";
// import Navigation from "./Components/Nvigation";

const App = () => (
  <>
    <Layout>
      {/* <Navigation/> */}
      {/* App */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shows/:showID" component={ShowDetals} />
        <Route path="/shows" component={Shows} />
      </Switch>
    </Layout>
  </>
);
export default App;

// {
/* <h2>909fc48fa03ae2859591c18d4196af2e
          ///
          https://api.themoviedb.org/3/movie/550?api_key=909fc48fa03ae2859591c18d4196af2e
          //
          eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDlmYzQ4ZmEwM2FlMjg1OTU5MWMxOGQ0MTk2YWYyZSIsInN1YiI6IjYwMGRiNzM2YzQzM2VhMDA0MDQyNWNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPcoKED1pMnHBNpLXPubmBzlZDcoVyaArd5twO698e4
          //
        </h2> */
// }
