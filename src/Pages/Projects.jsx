import projCalc from "../assets/Projects/proj-10.png";
import projWeather from "../assets/Projects/weather-site.png";
import projhome from "../assets/Projects/proj-12.png";
import projsearch from "../assets/Projects/search (1).png";
import pagecustomizer from "../assets/Projects/page customize.png";
import ecommerce from "../assets/Projects/e-commerce.png";
import education from "../assets/Projects/Asheducation.png";
import productManagement from "../assets/Projects/products managment.png";
import bondi from "../assets/Projects/bondi.png";
import "./projects.css";
import ProjectsCard from "../components/ProjectsCard";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSquareJs,
} from "react-icons/fa6";

export default function Projects() {
  return (
    <>
      <div className="projects">
      <h1 className="mainHeader" style={{ textAlign: "center" }}>projects</h1>
        <div className="containerFromCOmp" style={{ paddingTop: "40px" }}>
      <div className="ProjectContent">
        <ProjectsCard
          img={education}
          title={"education"}
          HTMlicon={<FaHtml5 />}
          cssicon={<FaCss3Alt />}
          src={"https://github.com/ashrafmo-1/ASH-EDUCATION"}
          live={"https://ashrafmo-1.github.io/ASH-EDUCATION/"}
        />

        <ProjectsCard
          img={ecommerce}
          title={"ecommerce"}
          reactIcon={<FaReact />}
          cssicon={<FaCss3Alt />}
          bs={<FaBootstrap />}
          jsicon={<FaSquareJs />}
          src="https://github.com/ashrafmo-1/happy-shoping"
          live="https://happy-shoping-1.web.app/"
        />

        <ProjectsCard
          img={projsearch}
          title={"search"}
          HTMlicon={<FaHtml5 />}
          cssicon={<FaCss3Alt />}
          src={"https://github.com/ashrafmo-1/search"}
          live=""
        />

        <ProjectsCard
          img={pagecustomizer}
          title={"shape is adjustable"}
          HTMlicon={<FaHtml5 />}
          cssicon={<FaCss3Alt />}
          jsicon={<FaSquareJs />}
          src={"https://github.com/ashrafmo-1/special-webSite-full-responsive"}
          live={"https://ashrafmo-1.github.io/special-webSite-full-responsive/"}
        />

        <ProjectsCard
          img={projCalc}
          title={"calculator"}
          reactIcon={<FaReact />}
          cssicon={<FaCss3Alt />}
          jsicon={<FaSquareJs />}
          src={"https://github.com/ashrafmo-1/Calculator-react-Js"}
          live={"https://simple-calculator-11.web.app"}
        />

        <ProjectsCard
          img={projWeather}
          title={"weather"}
          HTMlicon={<FaHtml5 />}
          cssicon={<FaCss3Alt />}
          jsicon={<FaSquareJs />}
          src={"https://github.com/ashrafmo-1/weather"}
          live={"https://ashrafmo-1.github.io/weather/"}
        />

        <ProjectsCard
          img={projhome}
          title={"home design"}
          HTMlicon={<FaHtml5 />}
          cssicon={<FaCss3Alt />}
          // src={'https://github.com/ashrafmo-1/weather'}
          // live={'https://ashrafmo-1.github.io/weather/'}
        />

        <ProjectsCard
          img={productManagement}
          title={"home design"}
          reactIcon={<FaReact />}
          cssicon={<FaCss3Alt />}
          jsicon={<FaSquareJs />}
          src={"https://github.com/ashrafmo-1/crud-products-app"}
          live={"https://crud-products-app.firebaseapp.com/"}
        />

        <ProjectsCard
          img={bondi}
          title={"home design"}
          HTMlicon={<FaHtml5 />}
          cssicon={<FaCss3Alt />}
          bs={<FaBootstrap />}
          src={"https://github.com/ashrafmo-1/bondi-site"}
          live={"https://ashrafmo-1.github.io/bondi-site/"}
        />
      </div>
    </div>
    </div>
</>
  );
}
