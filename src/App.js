import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };

    //   const movies = [
    //     {
    //       id: 0,
    //       title: "Avengers : The Infinity War",
    //       poster_src:
    //         "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //       plot:
    //         "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy…"
    //     },
    //     {
    //       id: 1,
    //       title: "The Avengers",
    //       poster_src:
    //         "https://image.tmdb.org/t/p/w185_and_h278_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    //       plot: "the second plot"
    //     }
    //   ];

    //   movies.forEach(movie => {
    //     console.log(movie.title);
    //   });
  }

  componentDidMount() {
    this.getMovies("batman");
  }

  getMovies(searchTerm) {
    const movieAPI =
      "https://api.themoviedb.org/3/search/movie?api_key=3824ca0ab0ed2c88932d7a8379d969ad&language=en-US&page=1&include_adult=false&query=" +
      searchTerm;
    axios
      .get(movieAPI)

      .then(res => {
        const results = res.data.results;

        console.log(results);
        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
            movie.poster_path;
          console.log(movie.title);
          console.log(movie.poster_src);

          const movieRow = (
            <table key={movie.id}>
              <tbody>
                <tr>
                  <td>
                    <img width="120" src={movie.poster_src} alt="poster" />
                  </td>
                  <td>
                    {movie.title}
                    <p>{movie.overview}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          );
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.getMovies(searchTerm);
  }

  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/#">
            <img width="50" src="the-movie-db.svg" alt="" />
            <span style={{ marginLeft: "1rem" }}>The Movie DB</span>
          </a>
        </nav>

        <div className="form-group">
          <input
            onChange={this.searchChangeHandler.bind(this)}
            className="form-control input-lg"
            placeholder="Search The movie here"
            type="text"
          />
        </div>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
