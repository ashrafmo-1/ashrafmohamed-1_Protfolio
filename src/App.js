import './App.css';

import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Navgation from './nvgation bar/Navgation';
import Home from './home/Home';
import Aboutus from './about/Aboutus';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import { useState, useEffect } from 'react';import { FaCircleUp } from "react-icons/fa6";

function App() {

  const [scrollToTop, setscrollToTop] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      window.scrollY > 500 ? setscrollToTop(true) : setscrollToTop(false);
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    })
  }
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
      {scrollToTop ? <button className='scrollToTop' onClick={scrollUp}><FaCircleUp /></button> : null}
    </div>
  );
}

export default App;