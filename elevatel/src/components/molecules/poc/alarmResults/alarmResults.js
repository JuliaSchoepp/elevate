import React, { Component } from "react";
import "./index.css";

class AlarmResults extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/alarm-results";
  };

  render() {
    return (
      <div className="alarm-result-page">
        <div className="text">
          <form onSubmit={this.handleSubmit}>
            <label>
              E-Mail:
              <input type="text" name="station" />
            </label>
            <button type="submit">Los</button>
          </form>
        </div>
        <div className="results">
          <h3>Meine Alarme</h3>
          <div className="label_line">
            <span style={{marginRight: '130px'}}>Name</span>
            <span>Zeitraum</span>
            <span>Status</span>
            <span>Email</span>
            <span>App</span>
          </div>

          <div className="line_result_one">
            <span className="name">
              Bahnhof Friedrichsstraße <span></span>
              <span>Gleis 1/2</span>
            </span>
            <span>Zeitraum</span>
            <span className="active"></span>
            <span>test@test.de</span>
            <span className="remove"></span>
          </div>

          <div className="line_result_two">
            <span className="name">
              Bahnhof Friedrichsstraße <span></span>
              <span>Gleis 1/2</span>
            </span>
            <span>Zeitraum</span>
            <span className="no_info"></span>
            <span>test@test.de</span>
            <span className="remove">x</span>
          </div>

          <div className="line_result_three">
            <span className="name">
              Bahnhof Friedrichsstraße <span></span>
              <span>Gleis 1/2</span>
            </span>
            <span>Zeitraum</span>
            <span className="not_active"></span>
            <span>test@test.de</span>
            <span className="remove">x</span>
          </div>
        </div>
      </div>
    );
  }
}

export { AlarmResults };
