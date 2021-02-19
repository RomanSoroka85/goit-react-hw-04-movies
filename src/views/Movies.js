import React, { Component } from "react";
import tvAPI from "../services/tv";
import { NavLink, Route, Switch } from "react-router-dom";
import getQueryParams from "../utils/get-query-params";
import Cast from "./Cast";
import Reviews from "./Reviews";

export default class Movies extends Component {
  state = { show: []};

  componentDidMount() {
    tvAPI
      .movieShowDetails(this.props.match.params.showID)
      .then((show) =>
        this.setState({ show, movieID: this.props.match.params.showID })
      );
    const  query = getQueryParams(this.props.location.search);
    if (query) {
      console.log("yes");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      tvAPI.movieShowDetails(nextQuery).then((show) => this.setState({ show }));
    }
  }

  onHandleSubmit = (query) => {
    console.log(query);
    query.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };
  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <br></br>
            <img
              src={`https://image.tmdb.org/t/p/w300${this.state.show.poster_path}`}
              alt={this.state.show.name}
            />
            <h1>{this.state.show.original_title}</h1>
            <p>{this.state.show.overview}</p>
            <ul>
              <li>
                <NavLink
                  to={`${this.props.match.url}/cast`}
                  className=""
                  activeClassName=""
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${this.props.match.url}/reviews`}
                  className=""
                  activeClassName=""
                >
                  Reviews
                </NavLink>
                <Switch>
                  <Route
                    path={`${this.props.match.url}/cast`}
                    render={() => <Cast id={this.state.movieID} />}
                  />
                  <Route
                    path={`${this.props.match.url}/reviews`}
                    render={() => <Reviews id={this.state.movieID} />}
                  />
                </Switch>
              </li>
            </ul>
          </>
        )}
      </div>
    );
  }
}
