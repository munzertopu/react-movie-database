import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        {/* <div classNameName="table-responsive">
          <table classNameName="table">
            <tbody>
              <tr>
                <td>
                  <img width="50" src="the-movie-db.svg" alt="" />
                </td>

                <td>Movie DB S</td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/#">
            <img width="50" src="the-movie-db.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  The Movie DB
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="form-group">
          <input class="form-control input-lg" id="inputlg" type="text" />
        </div>
      </div>
    );
  }
}

export default App;
