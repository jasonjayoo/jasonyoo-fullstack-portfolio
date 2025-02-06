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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NavBar from "./NavBar";

// function PortfolioMain() {
//   const [currentPage, setCurrentPage] = useState("About");
//   useEffect(() => {
//     const path = window.location.pathname.replace("/jasonyoo-fullstack-portfolio/", "").toLowerCase();
//     const validPages = ["about", "portfolio", "contact", "resume"];
  
//     if (validPages.includes(path)) {
//       setCurrentPage(path.charAt(0).toUpperCase() + path.slice(1));
//     } else {
//       setCurrentPage("About");
//     }
//   }, []);

//   return (
//     <div>
//       <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <main>
//         {currentPage === "About" && <About />}
//         {currentPage === "Portfolio" && <Portfolio />}
//         {currentPage === "Contact" && <Contact />}
//         {currentPage === "Resume" && <Resume />}
//       </main>
//     </div>
//   );
// }

// export default PortfolioMain;

function PortfolioMain() {
  useEffect(() => {
    // Optional: You can update your document title based on current page
    const path = window.location.pathname.replace("/jasonyoo-fullstack-portfolio/", "").toLowerCase();
    const validPages = ["about", "portfolio", "contact", "resume"];
    if (!validPages.includes(path)) {
      window.location.href = "/jasonyoo-fullstack-portfolio/about"; // Redirect to About if invalid path
    }
  }, []);

  return (
    <Router basename="/jasonyoo-fullstack-portfolio">
      <NavBar />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<About />} /> {/* Default route */}
        </Routes>
      </main>
    </Router>
  );
}

export default PortfolioMain;