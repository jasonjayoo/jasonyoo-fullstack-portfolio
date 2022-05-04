import React from "react";
import ParticleBackground from "./components/ParticleBackground";
import PortfolioMain from "./components/PortfolioMain";
import Footer from "./components/Footer";

let myStyle = {
  position: "relative",
  zIndex: '0 !important"'
}

function App() {
  return (
    <div className="App">
    <ParticleBackground />
    <div style={myStyle}>
        <PortfolioMain />
        <Footer />
    </div>     
  </div>
  )
}

export default App;
