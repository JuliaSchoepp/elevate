import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './index.css';

function Map() {
  const position = [52.520008, 13.404954];
  return (
    <MapContainer
      center={[52.520008, 13.404954]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[52.520008, 13.404954]}>
        <Popup>
          Berlin Alexanderplatz<br />
        </Popup>
      </Marker>
    </MapContainer>
  );
}
  
export {Map};