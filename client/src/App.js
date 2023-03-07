import React, { useState } from "react";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
