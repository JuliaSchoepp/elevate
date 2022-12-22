import React from "react";

import "./index.css";


import {Map} from '../nav/map/Map'
import MainLogo from '../../atoms/logoModule/MainLogo';

export default function Navigation() {
  return (
    <div className="home-page">
		<MainLogo />
		<div className="text">
			<h3>Du willst mit der Bahn fahren, aber der Fahrstuhl geht mal wieder nicht?</h3>
			<h3>Spar dir den Weg und schau mit ELEVATE! ob die Fahrstühle auf deiner Verbindung funktionieren.</h3>
		</div>
		<Map data-cy="home-map-alexanderplatz"  x={52.520008} y={13.404954} station={'Berlin Alexanderplatz'}/>
    </div>
  );
}
