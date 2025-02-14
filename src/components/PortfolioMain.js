import React, { useState, useEffect } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NavBar from "./NavBar";

function PortfolioMain() {
  const [currentPage, setCurrentPage] = useState("About");

  useEffect(() => {
    // const basePath = "/jasonyoo-fullstack-portfolio";
    const path = window.location.hash.replace("#", "").toLowerCase();
    const validPages = ["about", "portfolio", "contact", "resume"];
  
    if (validPages.includes(path)) {
      setCurrentPage(path.charAt(0).toUpperCase() + path.slice(1));
    } else {
      setCurrentPage("About");
    }
  }, []);

  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === "About" && <About />}
        {currentPage === "Portfolio" && <Portfolio />}
        {currentPage === "Contact" && <Contact />}
        {currentPage === "Resume" && <Resume />}
      </main>
    </div>
  );
}

export default PortfolioMain;
