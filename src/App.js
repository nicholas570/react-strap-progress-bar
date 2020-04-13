import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ProgBar from "./progressBar/ProgBar";
import UncontrolledCarousel from "./carousel/UncontolledCarousel";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ProgBar />
        <UncontrolledCarousel />
      </header>
    </div>
  );
}

export default App;
