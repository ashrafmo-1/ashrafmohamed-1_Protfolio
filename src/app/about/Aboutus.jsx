import Image from "next/image";
import "./about.css";
import my from "./me.jpg";

const Aboutus = () => {
  return (
    <section className="aboute" id="aboute">
      <h1 className="about-title ">About</h1>
      <div className="information">
        <Image className="my-image" src={my} alt="" />
        <div className="info">
          <h1 className="jopTItle">I'm a Software front end developer.</h1>
          <p className="disc">
            Software front end developer, functioning in the industry for 1+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
            <span className="instructor">
              I am now working as a JavaScript programming basics instructor.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
