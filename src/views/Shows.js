import React, { Component } from "react";
import { Link } from "react-router-dom";
import tvAPI from "../services/tv";

export default class Shows extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    tvAPI
      .fetchShowWithQuery("cat")
      .then((res) => this.setState({ shows: [...res] }));
  }
  render() {
    const { shows } = this.state;
    const { match } = this.props;
    return (
      <>
        <h2>Shows</h2>
        {/* {!!shows.length && ( */}
        <ul>
          {this.state.shows.map((show) => (
            <li key={show.id}>
              <Link to={`${match.url}/${show.id}`}>{show.original_title}</Link>
            </li>
          ))}
        </ul>
        {/* )} */}
      </>
    );
  }
}
