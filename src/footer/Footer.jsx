import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { AiOutlineReddit } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'></div>
      <div className='description'>
        <div className='social'>
          <a href='./'> <FaFacebookF /></a>
          <a href='./'> <FaInstagram /></a>
          <a href='https://github.com/ashrafmo-1'><FiGithub /> </a>
          <a href='./'> <AiOutlineReddit /></a>
          <a href='https://www.linkedin.com/in/ashraf-mohamed-b931a7236/'><sapn> <CiLinkedin /> </sapn></a>
        </div>
        <div className='copy-right'>&copy; 2024 all rights reserved by, ashraf mohamed</div>
      </div>
    </div>
  )
}

export default Footer;