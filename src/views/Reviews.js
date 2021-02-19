import React, { Component } from "react";
import tvAPI from "../services/tv";

export default class Reviews extends Component {
  state = { show: [] };

  componentDidMount() {
    tvAPI
      .fetchReviews(this.props.id)
      .then((data) => this.setState({ show: [...data] }));
  }

  render() {
    return (
      <div>
        {!!this.state.show && (
          <ul>
            {this.state.show.map((rev) => (
              <li>
                {/* <img
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt=""
                /> */}
                <h3>{rev.author}</h3>
                <p>{rev.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
