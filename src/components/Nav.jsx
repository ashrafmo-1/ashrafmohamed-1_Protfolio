import { Link } from "react-router-dom";
import brandIcon from "../assets/image/cvIcon.png";
import DarkMood from "./MoodCanger/DarkMood";

function Nav() {
  return (
    <div className="container" >
      <div className="navgation" style={{zIndex: '99', position: 'relative'}}>
        <div className="left">
          <h6 className={'nameSite'}><span>AS</span>hraf</h6>
          <nav> <Link to={"/"} className="link">
              <span> home </span>
            </Link>
            <Link className="link" to={'/Contact'}>
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
