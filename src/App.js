import './App.css';
import my from './assets/image 1.png'
import figma from './assets/Rectangle 1.png'
import react from './assets/Rectangle 2.png'
import { FaHtml5 } from "react-icons/fa6";
import css from './assets/Rectangle 7.png'
import js from './assets/Rectangle 6.png'
import redux from './assets/Rectangle 8.png'
import next from './assets/Rectangle 9.png'
import git from './assets/git.svg'
import cmd from './assets/terminal.svg'
import githup from './assets/github.svg'
import bootstarp from './assets/bootstrap.svg'
import linux from './assets/linux.svg'
import slack from './assets/slack.svg'
import notion from './assets/notion.svg'
import Projects from './pages/projects/Projects';
function App() {

  window.onload = function() {
    alert('the site under fix any erroe')
  }

  return (
    <div>
      <div className='Container'>
      <header>
        <h1 className='nav-title'><span>AS</span>hraf mohamed</h1>
        <nav>
          <span>Home</span>
          <span>About</span>
          <span>call me</span>
        </nav>
      </header>
        <div className='landing'>
          <div className='head-image'><img className='my-image' src={my} alt='' /></div>
          <div className='content'>
            <p className='head-name'>Hello! I Am <span>ashraf mohamed</span></p>
            <span className='head-jop'>front end developer</span>
            <p className='head-hent'>Welcome to my business gallery</p>
          </div>
        </div>
        <div className='aboute'>
          <h1 className='jopTItle'>I'm a Software front end developer.| </h1>
          <p className='cuurentJop'>Currently, I'm a Software Engineer at</p>
          <p className='disc'>
          Software front end developer, functioning in the industry for 1+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.
          </p>
        </div>
        <div className='skills'>
          <h1 className='skillsTitle'>
            I'm currently looking to join a cross-functional team
            that values improving people's lives through accessible design
          </h1>
          <p>s</p>
          <div className='skills-boxes'>
          <div className='box html'>
              <FaHtml5 />
            </div>
            <div className='box'>
              <img src={css} alt='' />
            </div>
            <div className='box'>
              <img src={js} alt='' />
            </div>
            <div className='box'>
              <img src={react} alt='' />
            </div>
            <div className='box'>
              <img src={figma} alt='' />
            </div>
            <div className='box'>
              <img src={redux} alt='' />
            </div>
            <div className='box'>
              <img src={next} className='next' alt='' />
            </div>
            <div className='box'>
              <img src={git} alt='' />
            </div>
            <div className='box'>
              <img src={cmd} alt='' />
            </div>
            <div className='box'>
              <img src={githup} alt='' />
            </div>
            <div className='box'>
              <img src={bootstarp} alt='' />
            </div>
            <div className='box'>
              <img src={linux} alt='' />
            </div>
            <div className='box'>
              <img src={slack} alt='' />
            </div>
            <div className='box'>
              <img src={notion} alt='' />
            </div>
          </div>
        </div>
        <Projects />
        <div className='contact-me'>
          <h2 className='contact-title'>Contact</h2>
          <p className='contact-descreption'>
          I'm currently looking to join a cross-functional team that values improving people's lives
          through accessible design. or have a project in mind? Let's connect.
          </p>
          <a href='./' className='contactLink'>ashrafmohamed@gmail.com</a>
        </div>
        <footer>
          <p className='footer'>
            © 2023 ashraf mohamed. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
