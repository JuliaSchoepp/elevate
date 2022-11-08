import React from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Navigation } from "./components/nav/Navigation";
import './styling/index.css'


export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Navigation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
