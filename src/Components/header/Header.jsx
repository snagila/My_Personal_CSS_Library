import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Sachin Nagila</div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/about" className="custom-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" className="custom-link">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className="custom-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="custom-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Sachin Nagila</div>
        <div className="hamburger-menu">
          <div
            className={` hamburger-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={`menu-links ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <li>
              <Link to="/about" className="custom-link" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="custom-link"
                onClick={toggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className="custom-link" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="custom-link" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
