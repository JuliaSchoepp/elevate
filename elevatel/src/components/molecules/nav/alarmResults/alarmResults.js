import React, { Component } from "react";
import "./index.css";
import MainLogo from "../../../atoms/logoModule/MainLogo";

export default class AlarmResults extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeDiv = this.removeDiv.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/alarm-results";
  };

  removeDiv = (e) => {
    console.log(e.target);
    let target = e.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
  }

  render() {
    return (
      <div className="alarm-result-page" data-cy="alarm-result-page">
        <MainLogo />
        <div className="text">
          <form onSubmit={this.handleSubmit}>
            <label>
              E-Mail:
              <input type="text" name="station" />
            </label>
            <button type="submit">Los</button>
          </form>
        </div>
        <div className="results" data-cy="results">
          <h3>Meine Alarme</h3>
          <div className="label_line">
            <span style={{ marginRight: "130px" }}>Name</span>
            <span>Zeitraum</span>
            <span>Status</span>
            <span>Email</span>
            <span>App</span>
          </div>

          <div className="line_result_one">
            <span className="name">
              <span>Bahnhof Friedrichsstraße</span>
              <span>Gleis 1/2</span>
            </span>
            <span className="status">
              <span>Mo - Fr</span>
              <span>06:00 - 06:30</span>
              <span>16:00 - 16:30</span>
            </span>
            <span className="active" title="active" ></span>
            <span>test@test.de</span>
            <span className="remove" onClick={this.removeDiv}></span>
          </div>

          <div className="line_result_two">
            <span className="name">
              Bahnhof Friedrichsstraße <span></span>
              <span>Gleis 1/2</span>
            </span>
            <span className="status">
              <span>Mo - Fr</span>
              <span>06:00 - 06:30</span>
              <span>16:00 - 16:30</span>
            </span>
            <span className="no_info" title="unknown"></span>
            <span>test@test.de</span>
            <span className="remove" onClick={this.removeDiv}></span>
          </div>

          <div className="line_result_three" data-cy="line_result_three">
            <span className="name">
              Bahnhof Friedrichsstraße <span></span>
              <span>Gleis 1/2</span>
            </span>
            <span className="status">
              <span>Mo - Fr</span>
              <span>06:00 - 06:30</span>
              <span>16:00 - 16:30</span>
            </span>
            <span className="not_active" title="disabled"></span>
            <span>test@test.de</span>
            <span className="remove" data-cy="remove_line_result_three" onClick={this.removeDiv}></span>
          </div>
        </div>
      </div>
    );
  }
}

export { AlarmResults };
