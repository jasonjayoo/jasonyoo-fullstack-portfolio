// import React, { useState, useEffect, useRef } from "react";
// import useWindowWidth from "../hooks/useWindowWidth";

// function NavBar({ currentPage, setCurrentPage }) {
//   const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu
//   const windowWidth = useWindowWidth(); // Get the window width
//   const dropdownRef = useRef(null);

//   // Handle toggling of the menu
//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleBannerClick = () => {
//     setCurrentPage("About");
//   };

//   // Close the dropdown when clicking outside of it
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest(".hamburger-icon")) {
//       setMenuOpen(false); // Close the dropdown if clicked outside
//     }
//   };

//   // Add event listener for clicks outside of the dropdown
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);

//     // Clean up the event listener on component unmount
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []); // Empty dependency array ensures this effect runs only once when component mounts

//   return (
//     <div id="tabs">
//       {windowWidth <= 650 ? (
//         // Hamburger menu for small screens
//         <div className="hamburger-menu">
//           <button
//             onClick={handleMenuToggle}
//             className="hamburger-icon"
//           >
//             ☰
//           </button>

//           {menuOpen && (
//             <div ref={dropdownRef} className="dropdown-menu">
//               <a
//                 href="#about"
//                 onClick={() => {
//                   setCurrentPage("About");
//                   setMenuOpen(false);
//                 }}
//                 className="dropdown-item"
//               >
//                 About
//               </a>
//               <a
//                 href="#portfolio"
//                 onClick={() => {
//                   setCurrentPage("Portfolio");
//                   setMenuOpen(false);
//                 }}
//                 className="dropdown-item"
//               >
//                 Portfolio
//               </a>
//               <a
//                 href="#contact"
//                 onClick={() => {
//                   setCurrentPage("Contact");
//                   setMenuOpen(false);
//                 }}
//                 className="dropdown-item"
//               >
//                 Contact
//               </a>
//               <a
//                 href="#resume"
//                 onClick={() => {
//                   setCurrentPage("Resume");
//                   setMenuOpen(false);
//                 }}
//                 className="dropdown-item"
//               >
//                 Resume
//               </a>
//             </div>
//           )}
//           <h1 className="mobile-header" onClick={handleBannerClick}>Jason Yoo Portfolio</h1>
//         </div>
//       ) : (
//         // Regular navigation for larger screens
//         <div className="nav nav-tabs nav-fill" id="nav-tab">
//           <a
//             href="#about"
//             onClick={() => setCurrentPage("About")}
//             className={currentPage === "About" ? "nav-item nav-link active" : "nav-item nav-link"}
//           >
//             About
//           </a>
//           <a
//             href="#portfolio"
//             onClick={() => setCurrentPage("Portfolio")}
//             className={currentPage === "Portfolio" ? "nav-item nav-link active" : "nav-item nav-link"}
//           >
//             Portfolio
//           </a>
//           <a
//             href="#contact"
//             onClick={() => setCurrentPage("Contact")}
//             className={currentPage === "Contact" ? "nav-item nav-link active" : "nav-item nav-link"}
//           >
//             Contact
//           </a>
//           <a
//             href="#resume"
//             onClick={() => setCurrentPage("Resume")}
//             className={currentPage === "Resume" ? "nav-item nav-link active" : "nav-item nav-link"}
//           >
//             Resume
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NavBar;


import React, { useState, useEffect, useRef } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import { Link } from "react-router-dom";

// function NavBar({ currentPage, setCurrentPage }) {
//   const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu
//   const windowWidth = useWindowWidth(); // Get the window width
//   const dropdownRef = useRef(null);

//   // Function to handle navigation
//   const handleNavigation = (page) => {
//     setCurrentPage(page);
//     const basePath = "/jasonyoo-fullstack-portfolio"; 
//     const pagePath = page.toLowerCase();

//     window.history.pushState(null, "", `${basePath}/${pagePath}`);
//     setMenuOpen(false);
//   };

//   // Handle toggling of the menu
//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleBannerClick = () => {
//     setCurrentPage("About");
//   };

//   // Close the dropdown when clicking outside of it
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest(".hamburger-icon")) {
//       setMenuOpen(false); // Close the dropdown if clicked outside
//     }
//   };

//   // Add event listener for clicks outside of the dropdown
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);

//     // Clean up the event listener on component unmount
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []); // Empty dependency array ensures this effect runs only once when component mounts

//   return (
//     <div id="tabs">
//       {windowWidth <= 650 ? (
//         <div className="hamburger-menu">
//           <button onClick={handleMenuToggle} className="hamburger-icon">
//             ☰
//           </button>

//           {menuOpen && (
//             <div ref={dropdownRef} className="dropdown-menu">
//               {["About", "Portfolio", "Contact", "Resume"].map((page) => (
//                 <button key={page} onClick={() => handleNavigation(page)} className="dropdown-item">
//                   {page}
//                 </button>
//               ))}
//             </div>
//           )}
//           <h1 className="mobile-header" onClick={() => handleNavigation("About")}>
//             Jason Yoo Portfolio
//           </h1>
//         </div>
//       ) : (
//         <div className="nav nav-tabs nav-fill" id="nav-tab">
//           {["About", "Portfolio", "Contact", "Resume"].map((page) => (
//             <button
//               key={page}
//               onClick={() => handleNavigation(page)}
//               className={currentPage === page ? "nav-item nav-link active" : "nav-item nav-link"}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default NavBar;


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu
  const windowWidth = useWindowWidth(); // Get the window width
  const dropdownRef = useRef(null);

  // Handle toggling of the menu
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest(".hamburger-icon")) {
      setMenuOpen(false); // Close the dropdown if clicked outside
    }
  };

  // Add event listener for clicks outside of the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <div id="tabs">
      {windowWidth <= 650 ? (
        <div className="hamburger-menu">
          <button onClick={handleMenuToggle} className="hamburger-icon">
            ☰
          </button>

          {menuOpen && (
            <div ref={dropdownRef} className="dropdown-menu">
              {["About", "Portfolio", "Contact", "Resume"].map((page) => (
                <Link
                  key={page}
                  to={`/${page.toLowerCase()}`} // Use React Router's Link for navigation
                  className="dropdown-item"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {page}
                </Link>
              ))}
            </div>
          )}
          <h1 className="mobile-header">
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              Jason Yoo Portfolio
            </Link>
          </h1>
        </div>
      ) : (
        <div className="nav nav-tabs nav-fill" id="nav-tab">
          {["About", "Portfolio", "Contact", "Resume"].map((page) => (
            <Link
              key={page}
              to={`/${page.toLowerCase()}`} // Use React Router's Link for navigation
              className="nav-item nav-link"
            >
              {page}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;