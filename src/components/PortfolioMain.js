// import React, { useState } from "react";
// import NavBar from "./NavBar";
// import Resume from "./pages/Resume";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

// export default function PortfolioMain() {
//   const [currentPage, setCurrentPage] = useState("About");
//   const renderPage = () => {
//     if (currentPage === "Resume") {
//       return <Resume />;
//     }
//     if (currentPage === "About") {
//       return <About />;
//     }
//     // if (currentPage === 'Edu') {
//     //   return <Edu />;
//     // }
//     if (currentPage === "Portfolio") {
//       return <Portfolio />;
//     }
//     return <Contact />;
//   };

//   return (
//     <div>
//       <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       {renderPage()}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NavBar from "./NavBar";

function PortfolioMain() {
  const [currentPage, setCurrentPage] = useState("About");

  useEffect(() => {
    // Read the hash from the URL (if it exists)
    const hash = window.location.hash.replace("#", "").toLowerCase();
    const validPages = ["about", "portfolio", "contact", "resume"];

    if (validPages.includes(hash)) {
      setCurrentPage(hash.charAt(0).toUpperCase() + hash.slice(1)); // Convert "portfolio" -> "Portfolio"
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
