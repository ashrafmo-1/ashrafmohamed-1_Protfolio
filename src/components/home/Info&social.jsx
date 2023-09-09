import myImage from "../../assets/image/photograph.jpg";
import {FaDiscord, FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const InfoAndSocila = () => {
    return(
        <div className="informationAndSocial">
            <h3>my name is,</h3>
            <h2>ashraf mohamed..</h2>
            <h4 style={{marginBottom: '15px'}}>front end developer</h4>
            <img src={myImage} alt="i`am" className="portfolioImage" />
            <div className={'icons'}>
                <a href="https://github.com/ashrafmo-1" target={'_blank'} className='socialLink'> <FaFacebook /> </a>
                <a href="https://github.com/ashrafmo-1" target={'_blank'} className='socialLink'> <FaDiscord /> </a>
                <a href="https://github.com/ashrafmo-1" target={'_blank'} className='socialLink'> <FaEnvelope /> </a>
                <a href="https://github.com/ashrafmo-1" target={'_blank'} className='socialLink'> <FaGithub /> </a>
                <a href="https://github.com/ashrafmo-1" target={'_blank'} className='socialLink'> <FaInstagram /> </a>
                <a href="https://github.com/ashrafmo-1" target={'_blank'} className='socialLink'> <FaLinkedinIn /> </a>
            </div>
        </div>
    )
}

export default InfoAndSocila;