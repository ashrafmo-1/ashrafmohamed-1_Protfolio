import "./projects.css";
import edu from "../../assets/Projects/Asheducation.png";
import bondi from "../../assets/Projects/bondi.png";
import ecommerce from "../../assets/Projects/e-commerce.jpg";
import customize from "../../assets/Projects/page customize.png";
import managmentManagment from "../../assets/Projects/products managment.png";
import calc from "../../assets/Projects/proj-10.png";
import weather from "../../assets/Projects/weather-site.png";
import translator from "../../assets/Projects/translator.png";
import dash from "../../assets/Projects/dash.png";
import GithubRepos from "../../assets/Projects/Github-repos.png";
import filterProject from "../../assets/Projects/filterProjects.jpg";
import TEXT_TO_SPEAK from "../../assets/Projects/TEXT TO SPEAK.jpg";
import todotasks from "../../assets/Projects/to do.jpg";
// sklls images
import html from "../../assets/html.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import react from "../../assets/science.png";
import redux from "../../assets/icons8-redux-48.png";
import bootstarp from "../../assets/bootstrap.svg";
import vite from "../../assets/vite-seeklogo.com.svg";
import ts from "../../assets/typescript.png";
import sass from "../../assets/sass.png";

import { FaRegEye } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projectTitle">Business Gallery</h1>
      <div className="porjetsBoxes">
        <div className="box">
          <div className="img">
            <img src={edu} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/ASH-EDUCATION">
                <FaCode />
              </a>
              <a href="https://ashrafmo-1.github.io/ASH-EDUCATION/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">ash education</h3>
            <p className="projectInfo">
              can you get any tocnologe learn in this site
            </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={css} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={bondi} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/bondi-site">
                <FaCode />
              </a>
              <a href="https://ashrafmo-1.github.io/bondi-site/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">bondi_templet</h3>
            <p className="projectInfo">
              this site to training on bootstap classes
            </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={bootstarp} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={ecommerce} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/Dragon_Shop">
                {" "}
                <FaCode />{" "}
              </a>
              <a href="https://dragon-shop.vercel.app/">
                {" "}
                <FaRegEye />{" "}
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">dragon store</h3>
            <p className="projectInfo">
              can user signUp by user and in site products management
            </p>
            <p
              className="projectInfo"
              style={{ color: "red", marginBottom: "10px" }}
            >
              backEnd wirking local only
            </p>
            <p className="projectInfo" style={{ color: "red" }}>
              We are still working on the creation and development
            </p>
            <div className="projectTools">
              <img src={css} alt="" />
              <img src={sass} alt="" />
              <img src={bootstarp} alt="" />
              <img src={react} alt="" />
              <img src={js} alt="" />
              <img src={ts} alt="" />
              <img src={redux} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={customize} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/special-webSite-full-responsive">
                <FaCode />
              </a>
              <a href="https://ashrafmo-1.github.io/special-webSite-full-responsive/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">customize site</h3>
            <p className="projectInfo">
              user can change background image, color text and font
            </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={managmentManagment} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/crud-products-app">
                <FaCode />
              </a>
              <a href="https://a-m-productsmanagment.web.app/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">product management</h3>
            <p className="projectInfo">
              products management can user show, add, remove products
            </p>
            <div className="projectTools">
              <img src={react} alt="" />
              <img src={redux} alt="" />
              <img src={css} alt="" />
              <img src={bootstarp} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={calc} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/Calculator-react-Js">
                <FaCode />
              </a>
              <a href="https://simple-calculator-11.web.app/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">Calculater</h3>
            <p className="projectInfo">full calculater syle from figma</p>
            <div className="projectTools">
              <img src={css} alt="" />
              <img src={react} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={weather} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/weather">
                <FaCode />
              </a>
              <a href="https://ashrafmo-1.github.io/weather/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">weather</h3>
            <p className="projectInfo">
              type yout country in input to shiw your current weather
            </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={translator} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/translate-app">
                <FaCode />
              </a>
              <a href="https://ashrafmo-1.github.io/translate-app/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">translator</h3>
            <p className="projectInfo">
              can user translate any language to any language
            </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={dash} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/dashboard-by-viteReact">
                <FaCode />
              </a>
              <a href="https://vite-dashboard-1.netlify.app">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">dashboard</h3>
            <p className="projectInfo">
              dashboard user time managemet and todo tasks
            </p>
            <div className="projectTools">
              <img src={vite} alt="" />
              <img src={css} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={GithubRepos} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/get_Github-repository">
                <FaCode />
              </a>
              <a href="https://ashrafmo-1.github.io/get_Github-repository/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">show gitHub reopos</h3>
            <p className="projectInfo">
              can user type userName in input fuild and the api show all repos
            </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={filterProject} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/projects_filter">
                <FaCode />
              </a>
              <a href="https://projects-filter.vercel.app/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">filter projects</h3>
            <p className="projectInfo">click on btn project to show you need</p>
            <p className="projectInfo" style={{ color: "red" }}>
              open on desktop only
            </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={TEXT_TO_SPEAK} alt="" />
            <div className="linksContent">
              <a href="https://ashrafmo-1.github.io/text-to-speak/">
                <FaCode />
              </a>
              <a href="https://github.com/ashrafmo-1/text-to-speak">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">TEXT TO SPEAK</h3>
            <p className="projectInfo">
              You can write anything inside the field and the robot will say
              what you wrote
            </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
            </div>
          </div>
        </div>

        <div className="box">
          <div className="img">
            <img src={todotasks} alt="" />
            <div className="linksContent">
              <a href="https://github.com/ashrafmo-1/to_do_tasks">
                <FaCode />
              </a>
              <a href="https://to-do-tasks-wine.vercel.app/">
                <FaRegEye />
              </a>
            </div>
          </div>
          <div className="boxContent">
            <h3 className="projectName">To Do Tasks</h3>
            <p className="projectInfo">add your tasks and remove this task </p>
            <div className="projectTools">
              <img src={html} alt="" />
              <img src={sass} alt="" />
              <img src={ts} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
