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
import dash from '../../assets/Projects/dash.png'

import html  from "../../assets/html.svg";
import css from '../../assets/Rectangle 7.png'
import react from '../../assets/Rectangle 2.png'
import js from '../../assets/Rectangle 6.png'
import redux from '../../assets/Rectangle 8.png'
import bootstarp from '../../assets/bootstrap.svg'
import vite from '../../assets/vite-seeklogo.com.svg'

const Projects = () => {
    return (
    <div className='projects' id='projects'>
        <h1 className='projectTitle'>Business Gallery</h1>
        <div className='projectsBoxes'>
                        {/* Ash-education */}
            <div className='box left'>
                <div className='projectInformation'>
                    <div>
                    <h2 className='product-name'>Ash-education</h2>
                    <p className='Project-desc'>
                    Specially designed for beginners because he is familiar with all the fields of technology of this era <br />
                    -Responsive design with all devices
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
            {/* Bondi bootstarp */}
            <div className='box right'>
            <div className='project-img'>
                    <img src={bondi} alt=''/>
                    <div className='bg-project right'></div>
                </div>
                <div className='projectInformation'>
                    <h2 className='product-name'>Bondi bootstarp</h2>
                    <p className='Project-desc'>
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
            {/* e-commerce */}
            <div className='box left'>
                <div className='projectInformation'>
                <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>e-commerce</h2>
                    <p className='Project-desc'>
                    A web application for visualizing custom e-commerce products you can add and remove login control and products
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
            {/* customize site */}
            <div className='box right'>
            <div className='project-img'>
                    <img src={customize} alt=''/>
                    <div className='bg-project right'></div>
                </div>
                <div className='projectInformation'>
                    <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>customize site</h2>
                    <p className='Project-desc'>
                    You can change the color, Background and fonts all this by javascript
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
            {/* products management */}
            <div className='box left'>
                <div className='projectInformation'>
                <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>products management</h2>
                    <p className='Project-desc'>
                    crud management, amd you can add, remove nay product
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
            {/* Calculater */}
            <div className='box right'>
            <div className='project-img'>
                    <img src={calc} alt=''/>
                    <div className='bg-project right'></div>
                </div>
                <div className='projectInformation'>
                    <h2 className='product-name'>Calculater</h2>
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
            {/* search bar */}
            <div className='box left'>
                <div className='projectInformation'>
                    <h2 className='product-name'>search bar</h2>
                    <p className='Project-desc'>
                    input faild traning: display flex
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
            {/* weather */}
            <div className='box right'>
            <div className='project-img'>
                    <img src={weather} alt=''/>
                    <div className='bg-project right'></div>
            </div>
                <div className='projectInformation'>
                    <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>weather</h2>
                    <p className='Project-desc'>
                    type your country name to get your weather
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
            {/* traslator App */}
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
            {/* vite dashboard */}
            <div className='box right'>
            <div className='project-img'>
                    <img src={dash} alt=''/>
                    <div className='bg-project right'></div>
            </div>
                <div className='projectInformation'>
                    <p className='head-title'>Featured Project</p>
                    <h2 className='product-name'>Dashboard</h2>
                    <p className='Project-desc right'>
                    Dashboard make by vite + react, show toDos tasks and peron information
                    </p>
                    <div className='project-icons'>
                        <img src={vite} alt='' />
                        <img src={css} alt='' />
                        <img src={js} alt='' />
                        <img src={bootstarp} alt='' />
                    </div>
                    <div className='btns-data'>
                        <a target='_blank' href='https://github.com/ashrafmo-1/dashboard-by-viteReact' className='btnLink'>src code</a>
                        <a target='_blank' href='https://vite-dashboard-1.netlify.app' className='btnLink active'>live</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects