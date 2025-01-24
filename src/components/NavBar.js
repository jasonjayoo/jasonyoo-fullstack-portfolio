import React from "react";


function NavBar({ currentPage, setCurrentPage }) {
  return (
    <div id="tabs">
      <div className="nav nav-tabs nav-fill" id="nav-tab">
        <a
          href="#about"
          onClick={() => setCurrentPage("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "About"
              ? "nav-item nav-link active"
              : "nav-item  nav-link"
          }
        >
          About
        </a>
        <a
          href="#portfolio"
          onClick={() => setCurrentPage("Portfolio")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio"
              ? "nav-item  nav-link active"
              : "nav-item nav-link"
          }
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => setCurrentPage("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Contact"
              ? "nav-item  nav-link active"
              : "nav-item nav-link"
          }
        >
          Contact
        </a>
        <a
          href="#resume"
          onClick={() => setCurrentPage("Resume")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={
            currentPage === "Resume"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default NavBar;
