import './projects.css'
import edu from '../../assets/Projects/Asheducation.png'
import bondi from '../../assets/Projects/bondi.png'
import ecommerce from '../../assets/Projects/e-commerce.png'
import customize from '../../assets/Projects/page customize.png'
import managmentManagment from '../../assets/Projects/products managment.png'
import calc from '../../assets/Projects/proj-10.png'
import weather from '../../assets/Projects/weather-site.png'
import search from '../../assets/Projects/search (1).png'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projectsBoxes'>
            <div className='box left'>
                <div className='projectInformation'>
                    <p>Featured</p>
                    <h2 className='product-name'>Ash-education</h2>
                    <p className='Project-desc'>
                    Specially designed for beginners because he is familiar with all the fields of technology of this era
                    Responsive design with all devices
                    </p>
                    <div className='project-icons'>

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
                    <p>Featured Project</p>
                    <h2 className='product-name'>ProjectName</h2>
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
                    <h2 className='product-name right'>ProjectName</h2>
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
                    <p>Featured Project</p>
                    <h2 className='product-name'>ProjectName</h2>
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
                    <p>Featured Project</p>
                    <h2 className='product-name'>ProjectName</h2>
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
                    <p>Featured Project</p>
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
        </div>
    </div>
  )
}

export default Projects