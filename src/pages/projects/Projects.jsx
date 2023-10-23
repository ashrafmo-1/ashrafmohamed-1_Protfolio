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

import html  from "../../assets/html.svg";
import css from '../../assets/Rectangle 7.png'
// import figma from '../../assets/Rectangle 1.png'
import react from '../../assets/Rectangle 2.png'
import js from '../../assets/Rectangle 6.png'
import redux from '../../assets/Rectangle 8.png'
import next from '../../assets/Rectangle 9.png'
import bootstarp from '../../assets/bootstrap.svg'

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
                        <img src={html} alt='' />
                        <img src={css} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/ASH-EDUCATION' className='btnLink'>src code</a>
                        <a target='_blank' href='https://ashrafmo-1.github.io/ASH-EDUCATION/' className='btnLink active'>live</a>
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
                    <img src={html} alt='' />
                        <img src={css} alt='' />
                        <img src={bootstarp} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/bondi-site' className='btnLink'>src code</a>
                        <a target='_blank' href='https://ashrafmo-1.github.io/bondi-site/' className='btnLink active'>live</a>
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
                    <img src={html} alt='' />
                        <img src={css} alt='' />
                        <img src={js} alt='' />
                        <img src={react} alt='' />
                        <img src={redux} alt='' />
                        <img src={bootstarp} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/E-commerce_products-management_react.js' className='btnLink'>src code</a>
                        <a target='_blank' href='https://a-m-productsmanagment.web.app' className='btnLink active'>live</a>
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
                    <img src={html} alt='' />
                        <img src={css} alt='' />
                        <img src={js} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/special-webSite-full-responsive' className='btnLink'>src code</a>
                        <a target='_blank' href='https://ashrafmo-1.github.io/special-webSite-full-responsive/' className='btnLink active'>live</a>
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
                    <img src={html} alt='' />
                        <img src={css} alt='' />
                        <img src={js} alt='' />
                        <img src={react} alt='' />
                        <img src={bootstarp} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/crud-products-app' className='btnLink'>src code</a>
                        <a target='_blank' href='https://a-m-productsmanagment.web.app/' className='btnLink active'>live</a>
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
                    <img src={html} alt='' />
                        <img src={css} alt='' />
                        <img src={js} alt='' />
                        <img src={react} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/Calculator-react-Js' className='btnLink'>src code</a>
                        <a target='_blank' href='https://simple-calculator-11.web.app/' className='btnLink active'>live</a>
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
                    <img src={html} alt='' />
                        <img src={css} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/search' className='btnLink'>src code</a>
                        <a target='_blank' href='https://ashrafmo-1.github.io/search/' className='btnLink active'>live</a>
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
                    <img src={html} alt='' />
                        <img src={css} alt='' />
                        <img src={js} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/weather' className='btnLink'>src code</a>
                        <a target='_blank' href='https://ashrafmo-1.github.io/weather/' className='btnLink active'>live</a>
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
                    <img src={html} alt='' />
                        <img src={css} alt='' />
                        <img src={js} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/translate-app' className='btnLink'>src code</a>
                        <a target='_blank' href='https://ashrafmo-1.github.io/translate-app/' className='btnLink active'>live</a>
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