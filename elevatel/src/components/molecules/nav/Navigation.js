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
        <NavLink to="/" className="link">
          <img src={homeImg} alt="home" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/karte" className="link">
          <img src={karteIcon} alt="karte" />
          <span>Karte</span>
        </NavLink>
        <NavLink to="/suche" className="link">
          <img src={sucheImg} alt="karte" />
          Suche
        </NavLink>
        <NavLink to="/alarm" className="link">
          <img src={alarmImg} alt="karte" />
          Alarm
        </NavLink>
      </div>
    );
  }
}

export { Navigation };
