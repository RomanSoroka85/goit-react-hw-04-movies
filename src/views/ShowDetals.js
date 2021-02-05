import React, { Component } from "react";
import tvAPI from "../services/tv";

export default class ShowDetals extends Component {
  state = { show: null };

  componentDidMount() {
    tvAPI
      .fetchShowDetails(this.props.match.params.showID)
      .then((show) => this.setState({ show }));
  }

  render() {
    return (
      <div>
        <h2>Hello</h2>
        {this.state.show && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w300${this.state.show.poster_path}`}
              alt={this.state.show.name}
            />
            <h1>{this.state.show.original_title}</h1>
          </>
        )}
      </div>
    );
  }
}
