import { FaHtml5 } from "react-icons/fa6";
import figma from '../../assets/Rectangle 1.png'
import react from '../../assets/Rectangle 2.png'
import css from '../../assets/Rectangle 7.png'
import js from '../../assets/Rectangle 6.png'
import redux from '../../assets/Rectangle 8.png'
import next from '../../assets/Rectangle 9.png'
import git from '../../assets/git.svg'
import cmd from '../../assets/terminal.svg'
import githup from '../../assets/github.svg'
import bootstarp from '../../assets/bootstrap.svg'
import slack from '../../assets/slack.svg'
import notion from '../../assets/notion.svg'
import firebase from '../../assets/firebase.svg'
import vite from '../../assets/vite-seeklogo.com.svg'
import './skils.css'

const Skills = () => {
  return (
    <div className='skills' id="skills">
    <h1 className='skillsTitle'>
      My favorite skills
    </h1>
    <p>'</p>
    <div className='skills-boxes'>
    <div className='box html'>
        <FaHtml5 />
      </div>
      <div className='box'>
        <img src={css} alt='' />
      </div>
      <div className='box'>
        <img src={bootstarp} alt='' />
      </div>
      <div className='box'>
        <img src={js} alt='' />
      </div>
      <div className='box'>
        <img src={react} alt='' />
      </div>
      <div className='box'>
        <img src={vite} alt='' />
      </div>
      <div className='box'>
        <img src={next} className='next' alt='' />
      </div>
      <div className='box'>
        <img src={redux} alt='' />
      </div>
      <div className='box'>
        <img src={figma} alt='' />
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
        <img src={slack} alt='' />
      </div>
      <div className='box'>
        <img src={notion} alt='' />
      </div>
      <div className='box'>
        <img src={firebase} alt='' />
      </div>
    </div>
  </div>
  )
}

export default Skills