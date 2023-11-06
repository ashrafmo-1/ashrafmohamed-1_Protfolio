import my from '../assets/image 1.png'
import './home.css'

const Home = () => {
  return (
    <div className='landing' id='#home'>
    <div className='head-image'><img className='my-image' src={my} alt='' /></div>
    <div className='content'>
      <p className='head-name'>Hello! I Am <span>ashraf mohamed</span></p>
      <span className='head-jop'>front end developer</span>
      <p className='head-hent'>Welcome to my business gallery</p>
    </div>
  </div>
  )
}

export default Home