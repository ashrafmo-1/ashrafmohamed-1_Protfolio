import { Link } from "react-router-dom";
import brandIcon from "../icons/cvIcon.png"
import { FaBars } from "react-icons/fa6";

function Nav() {
    return (
        <div className="container">
            <div className="navgation">
            <div className="left">
            <img className="brandIcon" src={brandIcon} alt="brandIcon" />
            <nav>
                <Link to={'/'} className="link"><span>home</span></Link>
                <Link to={'/skills'} className="link"><span>skills</span></Link>
                <Link to={'/Projects'} className="link"><span>Projects</span></Link>
            </nav>
                </div>
                <div className="right">
                    <Link className="link"><span>contact me</span></Link>
                </div>
            </div>
            <h2 className="barsToggle" onClick={() => {
                document.querySelector(".navgation").classList.toggle("active");
            }}><FaBars /></h2>
        </div>
    )
}

export default Nav;