import my from "../assets/image 1.png";
import Theme from "../themes/Theme";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="landing" id="#home">
      <div className="head-image">
        <img className="my-image" src={my} alt="" />
      </div>
      <div className="content">
        <p className="head-name">
          Hello! I'am
          <span>
            <Typewriter
              words={["Ashraf Mohamed"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <span className="head-jop">
          <Typewriter
            words={[
              "front end Development",
              "javascript Development",
              "programming basics instructor.",
            ]}
            loop={12}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <p className="head-hent">Welcome to my business gallery</p>
      </div>
      <Theme />
    </div>
  );
};

export default Home;
