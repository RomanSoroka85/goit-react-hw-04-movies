import React, { Component } from "react";
import API from "../services/tv";
import { Link } from "react-router-dom";

class SearchMovies extends Component {
  state = {
    value: "",
    shows: [],
  };
  onHandleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    API.searchMovies(this.state.value).then((data) =>
      this.setState({ shows: data.results })
      // console.log(data)
    );
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Search
            <input
              type="text"
              value={this.state.value}
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit">Search</button>
        </form>

        <ul>
          {this.state.shows.map((show) => (
            <li key={show.id}>
              <Link to={`${this.props.match.url}/${show.id}`}>
                {show.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default SearchMovies;
