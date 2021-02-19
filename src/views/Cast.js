import React, { Component } from "react";
import tvAPI from "../services/tv";

export default class Cast extends Component {
  state = { show: [] };

  componentDidMount() {
    tvAPI.fetchCast(this.props.id).then((data) => this.setState({ show: data.cast }));
  }

  render() {
    return (
      <div>
        
        {!!this.state.show && (
          <ul>
            {this.state.show.map((actor) => (
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt=""
                />
                <h3>{actor.original_name}</h3>
                <p>{actor.character}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
