import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
// import { HashLink as Link } from 'react-router-hash-link'
import { Link } from "react-scroll";
import "./nav.css";

const Navgation = () => {
  return (
    <header>
      <h1 className="nav-title">
        <span>AS</span>hraf mohamed
      </h1>
      <nav className="navgation">
        <Link to={"home"} smooth={true} offset={-100} duration={400}>
          Home
        </Link>
        <Link to={"aboute"} smooth={true} offset={-50} duration={400}>
          About
        </Link>
        <Link to={"skills"} smooth={true} offset={-50} duration={400}>
          Skills
        </Link>
        <Link to={"projects"} smooth={true} offset={-100} duration={400}>
          Projects
        </Link>
        <Link to={"contact"} smooth={true} duration={400}>
          contact us
        </Link>
      </nav>
      <div
        className="toggleBar"
        onClick={() =>
          document.querySelector(".navgation").classList.toggle("active")
        }
      >
        <FaBarsStaggered />
      </div>
    </header>
  );
};

export default Navgation;
