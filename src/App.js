import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ProgBar from "./progressBar/ProgBar";
import ControlledCarousel from "./carousel/ControlledCarousel";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ProgBar />
      </header>
      <ControlledCarousel />
    </div>
  );
}

export default App;
