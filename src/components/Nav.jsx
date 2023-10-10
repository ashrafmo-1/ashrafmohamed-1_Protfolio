import { Link } from "react-router-dom";
import DarkMood from "./MoodCanger/DarkMood";

function Nav() {
  return (
    <div className="container">
      <div className="navgation" style={{ zIndex: "99", position: "relative" }}>
        <div className="left">
          <Link to={"/"} className={"nameSite"}>
            <span>AS</span>hraf
          </Link>
          <nav>
            {" "}
            <Link to={"/"} className="link">
              <span> home </span>
            </Link>
            <Link className="link" to={"/Contact"}>
              <span> contact me </span>
            </Link>
            <DarkMood />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
