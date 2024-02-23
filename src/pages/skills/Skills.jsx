import html from "../../assets/html.png";
import css from '../../assets/css-3.png';
import sass from '../../assets/sass.png';
import js from '../../assets/js.png';
import ts from '../../assets/typescript.png'
import react from '../../assets/science.png';
import figma from '../../assets/figma.png';
import redux from '../../assets/icons8-redux-48.png';
import next from '../../assets/Rectangle 9.png';
import git from '../../assets/git.svg';
import cmd from '../../assets/terminal.svg';
import githup from '../../assets/github.svg';
import bootstarp from '../../assets/bootstrap.svg';
import slack from '../../assets/slack.svg';
import notion from '../../assets/notion.svg';
import vite from '../../assets/vite-seeklogo.com.svg';
import './skils.css';

const Skills = () => {
  return (
    <div className='skills' id="skills">
    <h1 className='skillsTitle'>
      My favorite skills
    </h1>
    <div className='skills-boxes'>
    <div className='box'>
        <img src={html} alt='' />
        <p className="title">HTML</p>
      </div>
      <div className='box'>
        <img src={css} alt='' />
        <p className="title">css</p>
      </div>
      <div className='box'>
        <img src={sass} alt='' />
        <p className="title">sass</p>
      </div>
      <div className='box'>
        <img src={bootstarp} alt='' />
          <p className="title" style={{fontSize: '12px'}}>bootstarp</p>
      </div>
      <div className='box'>
        <img src={js} alt='' />
          <p className="title">JS</p>
      </div>
      <div className='box'>
        <img src={ts} alt='' />
          <p className="title">TS</p>
      </div>
      <div className='box'>
        <img src={react} alt='' />
          <p className="title">React</p>
      </div>
      <div className='box'>
        <img src={vite} alt='' />
          <p className="title">Vite</p>
      </div>
      <div className='box'>
        <img src={next} className='next' alt='' />
          <p className="title">Next</p>
      </div>
      <div className='box'>
        <img src={redux} alt='' />
          <p className="title">Redux</p>
      </div>
      <div className='box'>
        <img src={figma} alt='' />
          <p className="title">Figma</p>
      </div>
      <div className='box'>
        <img src={git} alt='' />
          <p className="title">Git</p>
      </div>
      <div className='box'>
        <img src={githup} alt='' />
          <p className="title">Github</p>
      </div>
      <div className='box'>
        <img src={cmd} alt='' />
          <p className="title">CMD</p>
      </div>
      <div className='box'>
        <img src={slack} alt='' />
          <p className="title">Slack</p>
      </div>
      <div className='box'>
        <img src={notion} alt='' />
          <p className="title">Notion</p>
      </div>
    </div>
    </div>
  )
}

export default Skills