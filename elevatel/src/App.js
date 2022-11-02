import React from "react";
import Content from "./components/hello-world/Content";
import { FetchAPIData } from "./components/fetchData/Fetch";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/nav/Navigation";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

export const UserContext = React.createContext();

function App() {
  const position = [51.505, -0.09];

  return (
    <div className="App">
      <Header />
      <div className="main">
      <Navigation />
        <UserContext.Provider value="Hello World">
          <Content />
        </UserContext.Provider>
        <FetchAPIData />
    </div>
    <div id="map">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
