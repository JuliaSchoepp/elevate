import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./index.css";

class Map extends React.Component {
  render() {
    // const position = [this.props.x, this.props.y];
    return (
      <MapContainer
        center={[this.props.x, this.props.y]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[this.props.x, this.props.y]}>
          <Popup>
            {this.props.station}
            <br />
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export { Map };
