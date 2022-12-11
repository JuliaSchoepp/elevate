import React from "react";

import "./index.css";


import Map from '../nav/map/Map'
import MainLogo from '../../atoms/logoModule/MainLogo';

export default function Navigation() {
  return (
    <div className="home-page">
		<MainLogo />
		<div className="text">
			<h1>Du willst mit der Bahn fahren, aber der Fahrstuhl geht mal wieder nicht?</h1>
			<h1>Spar dir den Weg und schau mit ELEVATE! ob die Fahrstühle auf deiner Verbindung funktionieren.</h1>
		</div>
		<Map/>
    </div>
  );
}
