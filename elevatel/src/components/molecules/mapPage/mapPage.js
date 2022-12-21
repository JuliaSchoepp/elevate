import React from "react";

import "./index.css";
import { Map } from "../nav/map/Map";
import MainLogo from "../../atoms/logoModule/MainLogo";

export default function MapPage() {
  return (
    <div className="map-page">
      <MainLogo />
      <div className="text">
        <h3>
          Mit der Karte kannst du nach nach einer Station suchen. Klicke auf
          einen Bahnhof.
        </h3>
      </div>
      <div>
        <Map
          x={52.52018338627786}
          y={13.386858577510992}
          station={"Berlin - Friedrichstrasse"}
        />
      </div>
    </div>
  );
}

export { MapPage };
