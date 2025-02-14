import React, { useState, useEffect, useRef } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

function NavBar({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu
  const windowWidth = useWindowWidth(); // Get the window width
  const dropdownRef = useRef(null);

  // Function to handle navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
    const basePath = "/jasonyoo-fullstack-portfolio"; 
    window.history.pushState(null, "", `${basePath}/${page.toLowerCase()}`);
    setMenuOpen(false);
  };

  // Handle toggling of the menu
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleBannerClick = () => {
    setCurrentPage("About");
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
                <button key={page} onClick={() => handleNavigation(page)} className="dropdown-item">
                  {page}
                </button>
              ))}
            </div>
          )}
          <h1 className="mobile-header" onClick={() => handleNavigation("About")}>
            Jason Yoo Portfolio
          </h1>
        </div>
      ) : (
        <div className="nav nav-tabs nav-fill" id="nav-tab">
          {["About", "Portfolio", "Contact", "Resume"].map((page) => (
            <button
              key={page}
              onClick={() => handleNavigation(page)}
              className={currentPage === page ? "nav-item nav-link active" : "nav-item nav-link"}
            >
              <span className="main-nav-options">{page}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
