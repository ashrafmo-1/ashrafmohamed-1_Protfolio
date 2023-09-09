import { Link } from "react-router-dom";
import brandIcon from "../assets/image/cvIcon.png";
import { FaBars } from "react-icons/fa6";
import DarkMood from "./MoodCanger/DarkMood";

function Nav() {
  return (
    <div className="container">
      <div className="navgation">
        <div className="left">
          <img className="brandIcon" src={brandIcon} alt="brandIcon" />
          <nav> <Link to={"/"} className="link">
              <span> home </span>
            </Link>
            <Link className="link">
              <span> contact me </span>
            </Link>
            <DarkMood />
          </nav>
        </div>
      </div>
      <h2
        className="barsToggle"
        onClick={() => {
          document.querySelector(".navgation").classList.toggle("active");
        }}
      >

        <FaBars />
      </h2>
    </div>
  );
}

export default Nav;
