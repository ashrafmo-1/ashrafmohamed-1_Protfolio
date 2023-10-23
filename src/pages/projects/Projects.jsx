import './projects.css'
import edu from '../../assets/Projects/Asheducation.png'
import bondi from '../../assets/Projects/bondi.png'
import ecommerce from '../../assets/Projects/e-commerce.png'
import customize from '../../assets/Projects/page customize.png'
import managmentManagment from '../../assets/Projects/products managment.png'
import calc from '../../assets/Projects/proj-10.png'
import weather from '../../assets/Projects/weather-site.png'
import search from '../../assets/Projects/search (1).png'
import translator from '../../assets/Projects/translator.png'

import { FaHtml5 } from "react-icons/fa6";
import css from '../../assets/Rectangle 7.png'
import figma from '../../assets/Rectangle 1.png'
import react from '../../assets/Rectangle 2.png'
import js from '../../assets/Rectangle 6.png'
import redux from '../../assets/Rectangle 8.png'
import next from '../../assets/Rectangle 9.png'
import git from '../../assets/git.svg'
import cmd from '../../assets/terminal.svg'
import githup from '../../assets/github.svg'
import bootstarp from '../../assets/bootstrap.svg'
import linux from '../../assets/linux.svg'
import slack from '../../assets/slack.svg'
import notion from '../../assets/notion.svg'
import firebase from '../../assets/firebase.svg'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projectsBoxes'>
            <div className='box left'>
                <div className='projectInformation'>
                    <div>
                    <p class="head-title">Featured Project</p>
                    <h2 className='product-name'>Ash-education</h2>
                    <p className='Project-desc'>
                    Specially designed for beginners because he is familiar with all the fields of technology of this era
                    Responsive design with all devices
                    </p>
                    </div>
                    <div className='project-icons'>
                        <FaHtml5 />
                        <img src={css} alt='' />
                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
                <div className='project-img'>
                    <img src={edu} alt=''/>
                    <div className='bg-project'></div>
                </div>
            </div>
            <div className='box right'>
            <div className='project-img'>
                    <img src={bondi} alt=''/>
                    <div className='bg-project right'></div>
                </div>
                <div className='projectInformation'>
                    <p className='head-title right'>Featured Project</p>
                    <h2 className='product-name right'>Bondi bootstarp</h2>
                    <p className='Project-desc right'>
                    Designed entirely by the css bootstrap office
                    Responsive design with all devices
                    </p>
                    <div className='project-icons'>

                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
            </div>
            <div className='box left'>
                <div className='projectInformation'>
                <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>e-commerce</h2>
                    <p className='Project-desc'>
                    A web app for visualizing personalized Spotify data. View your
                    top artists, top tracks, recently played tracks, and detailed audio
                    information about each track.
                    </p>
                    <div className='project-icons'>

                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
                <div className='project-img'>
                    <img src={ecommerce} alt=''/>
                    <div className='bg-project'></div>
                </div>
            </div>
            <div className='box right'>
            <div className='project-img'>
                    <img src={customize} alt=''/>
                    <div className='bg-project right'></div>
                </div>
                <div className='projectInformation'>
                    <p className='head-title right'>Featured Project</p>
                    <h2 className='product-name right'>customize site</h2>
                    <p className='Project-desc right'>
                    A web app for visualizing personalized Spotify data. View your
                    top artists, top tracks, recently played tracks, and detailed audio
                    information about each track.
                    </p>
                    <div className='project-icons'>

                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
            </div>
            <div className='box left'>
                <div className='projectInformation'>
                <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>products management</h2>
                    <p className='Project-desc'>
                    A web app for visualizing personalized Spotify data. View your
                    top artists, top tracks, recently played tracks, and detailed audio
                    information about each track.
                    </p>
                    <div className='project-icons'>

                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
                <div className='project-img'>
                    <img src={managmentManagment} alt=''/>
                    <div className='bg-project'></div>
                </div>
            </div>
            <div className='box right'>
            <div className='project-img'>
                    <img src={calc} alt=''/>
                    <div className='bg-project right'></div>
                </div>
                <div className='projectInformation'>
                    <p className='head-title right'>Featured Project</p>
                    <h2 className='product-name right'>Calculater</h2>
                    <p className='Project-desc right'>
                    A web app for visualizing personalized Spotify data. View your
                    top artists, top tracks, recently played tracks, and detailed audio
                    information about each track.
                    </p>
                    <div className='project-icons'>

                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
            </div>
            <div className='box left'>
                <div className='projectInformation'>
                <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>search bar</h2>
                    <p className='Project-desc'>
                    A web app for visualizing personalized Spotify data. View your
                    top artists, top tracks, recently played tracks, and detailed audio
                    information about each track.
                    </p>
                    <div className='project-icons'>

                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
                <div className='project-img'>
                    <img src={search} alt=''/>
                    <div className='bg-project'></div>
                </div>
            </div>
            <div className='box right'>
            <div className='project-img'>
                    <img src={weather} alt=''/>
                    <div className='bg-project right'></div>
            </div>
                <div className='projectInformation'>
                    <p className='head-title right'>Featured Project</p>
                    <h2 className='product-name right'>weather</h2>
                    <p className='Project-desc right'>
                    A web app for visualizing personalized Spotify data. View your
                    top artists, top tracks, recently played tracks, and detailed audio
                    information about each track.
                    </p>
                    <div className='project-icons'>

                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
            </div>
            <div className='box left'>
                <div className='projectInformation'>
                <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>traslator App</h2>
                    <p className='Project-desc'>
                        translator application make by html css javascript api and json file and <br />{'-'} 
                        useing pure javascript
                    </p>
                    <div className='project-icons'>

                    </div>
                    <div className='btns-icons'>

                    </div>
                </div>
                <div className='project-img'>
                    <img src={translator} alt=''/>
                    <div className='bg-project'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects