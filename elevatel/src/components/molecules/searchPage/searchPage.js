import React, { Component } from 'react';
import "./index.css";
import { FetchAPIData } from "../../helpers/fetchData/Fetch";

class SearchPage extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = '/test';
  }

  render () {
    return (
      <div className="karte-page">
        <FetchAPIData/>
      <div className="text">
        <h3>Mit der Karte kannst du nach nach einer Station suchen. Klicke auf einen Bahnhof.</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Stationsuche:
            <input
              type="text"
              name="station"
            />
          </label>
          <button type="submit">Los</button>
        </form>
      </div>
      </div>
    );
  }
}

export {SearchPage}