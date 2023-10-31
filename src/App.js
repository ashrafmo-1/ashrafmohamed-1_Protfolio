import './App.css';

import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Navgation from './nvgation bar/Navgation';
import Home from './home/Home';
import Aboutus from './about/Aboutus';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
function App() {

  // window.onload = function() {
  //   alert('the site under fixed')
  // }

  return (
    <div>
      <div className='Container'>
        <Navgation />
        <Home />
        <Aboutus />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;