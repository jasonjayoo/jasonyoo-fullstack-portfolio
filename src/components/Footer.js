import React from "react";

const Footer = () => {
  return (
    <div className="logolinks flex-inline justify-content-center">
    <div className="logos">
      <a id="github" href="https://github.com/jasonjayoo" className="githublogo" target="_blank" rel="noreferrer">
        <i class="fab fa-github-square fa-3x contact"></i>
      </a>

      <a
        id="linkedin"
        href="https://www.linkedin.com/in/jason-yoo-b98a35224/"
        target="__blank"
      >
        <i class="fab fa-linkedin fa-3x contact" id="linkedinlogo"></i>
      </a>
      </div>  
      <footer className="copyright has-text-centered">
        <h4>
          <strong>© Jason J. Yoo™</strong> Full-Stack Portfolio. All Rights
          Reserved.
        </h4>
        
      </footer>
      
    </div>
  );
};

export default Footer;
