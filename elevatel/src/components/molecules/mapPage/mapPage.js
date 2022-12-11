import React from "react";

import "./index.css";
import Map from "../nav/map/Map";

export default function MapPage() {
  return (
    <div className="map-page">
		<div className="text">
			<h3>Mit der Karte kannst du nach nach einer Station suchen. Klicke auf einen Bahnhof.</h3>
		</div>
		<div>
			<Map/>
		</div>
    </div>
  );
}
