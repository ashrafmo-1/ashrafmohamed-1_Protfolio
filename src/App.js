import { FaBarsStaggered } from 'react-icons/fa6';
import './App.css';
import my from './assets/image 1.png'

import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
function App() {

  window.onload = function() {
    alert('the site under fixed')
  }

  return (
    <div>
      <div className='Container'>
      <header>
        <h1 className='nav-title'><span>AS</span>hraf mohamed</h1>
        <nav className='navgation'>
          <span>Home</span>
          <span>About</span>
          <span>call me</span>
        </nav>
        <div className='toggleBar' onClick={() => 
        document.querySelector('.navgation').classList.toggle('active')
        }>
          <FaBarsStaggered />
        </div>
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
        <Skills />
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
          All rights reserved ©2023 to ashraf mohamed
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;