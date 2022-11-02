import React from "react";
import { FetchAPIData } from "./components/fetchData/Fetch";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Navigation } from "./components/nav/Navigation";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './styling/index.css'

export const UserContext = React.createContext();
const position = [51.505, -0.09];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Navigation />
        <FetchAPIData />
        <div id="map">
        <MapContainer
        center={position}
        zoom={100}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='Some random text'
          url="http://blog.damonpollard.com/wp-content/uploads/2013/09/GTAV_ATLUS_4096x4096.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
		  </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
