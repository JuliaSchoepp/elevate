import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

// icons
import karteIcon from "../../../img/karte.png";
import sucheImg from "../../../img/suche.png";
import alarmImg from "../../../img/alarm.png";
import homeImg from "../../../img/home.png";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavLink to="/" data-cy="home-link" className="link">
          <img src={homeImg} alt="home" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/karte" data-cy="map-link" className="link">
          <img src={karteIcon} alt="karte" />
          <span>Karte</span>
        </NavLink>
        <NavLink to="/suche" data-cy="search-link" className="link">
          <img src={sucheImg} alt="suche" />
          Suche
        </NavLink>
        <NavLink to="/alarm" data-cy="alarm-link" className="link">
          <img src={alarmImg} alt="karte" />
          Alarm
        </NavLink>
      </div>
    );
  }
}

export { Navigation };
