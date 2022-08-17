import React from "react";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="background">
        <img className="wave3" src="../Imgs/wave3.png" alt="Wave 3" />
        <img className="wave2" src="../Imgs/wave2.png" alt="Wave 2" />
        <img className="wave1" src="../Imgs/wave1.png" alt="Wave 1" />
      </div>
      <Navbar />
      <section className="intro">
        <p className="intro-header">Welcome to my page 👋🏼</p>
        <p className="intro-subheader"></p>

      </section>
      <section className="projects"></section>
    </div>
  );
}

export default App;
