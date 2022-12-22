import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/index.css";
import { Navigation } from "./components/molecules/nav/Navigation";
import HomePage from "./components/molecules/homepage/Homepage";
import { SearchPage } from "./components/molecules/searchPage/searchPage";
import MapPage from "./components/molecules/mapPage/mapPage";
import { NotificationPage } from "./components/molecules/notificationPage/notificationPage";
import { AlarmResults } from "./components/molecules/nav/alarmResults/alarmResults";
import { ErrorPage } from "./components/molecules/errorTemplate404/error";

export const UserContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="side-menu">
          <Navigation />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/karte" element={<MapPage />} />
            <Route path="/suche" element={<SearchPage />} />
            <Route path="/alarm" element={<NotificationPage />} />
            <Route path="/alarm-results" element={<AlarmResults />} />
            <Route path="/404" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
