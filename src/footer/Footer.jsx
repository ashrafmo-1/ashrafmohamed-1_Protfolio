import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { AiOutlineReddit } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'></div>
      <div className='description'>
        <div className='social'>
          <a href='https://www.facebook.com/ASHRAFMoOoHAMED'> <FaFacebookF /></a>
          <a href='https://github.com/ashrafmo-1'><FiGithub /> </a>
          <a href='https://www.reddit.com/user/ashrafmo_1/?onetap_auto=true'> <AiOutlineReddit /></a>
          <a href='https://www.linkedin.com/in/ashraf-mohamed-b931a7236/'><sapn> <CiLinkedin /> </sapn></a>
        </div>
        <div className='copy-right'>&copy; 2024 all rights reserved by, ashraf mohamed</div>
      </div>
    </div>
  )
}

export default Footer;