import React, { useState, useEffect } from 'react';
import './App.css';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Navgation from './nvgation bar/Navgation';
import Home from './home/Home';
import Aboutus from './about/Aboutus';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import { FaCircleUp } from "react-icons/fa6";
import Testimonials from './testmoniols/Testimonials';

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

  const handleContextMenu = (e) => {
    e.preventDefault();
  }

  return (
    <div onContextMenu={handleContextMenu}>
        <Navgation />
      <div className='Container'>
        <Home />
        <Aboutus />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      {scrollToTop ? <button className='scrollToTop' onClick={scrollUp}><FaCircleUp /></button> : null}
    </div>
  );
}

export default App;