import Projects from "./Projects";
import Skills from "./Skills";
import portfolioImage from '../assets/image/cv.jpg'
import {Link} from "react-router-dom";

export default function Home() {
  return (
      <>
    <div className="containerFromCOmp" style={{ minHeight: "calc(100vh)" }}>
        <div className={'bgc'} style={{width: '40%', minHeight: "calc(100vh)", position: 'absolute', zIndex: '0', background: '#011603', top: '0', right: '0'}}></div>
      <div className="homeContent">
          <div className={'portfolioImage'}>
          <img src={portfolioImage} />
              <h2 className={'header-info'}>
                  <span>> Hello, I'm Ashraf, </span>
                  front end developer
              </h2>
              <p className={'description'}>I am an Egyptian, I have 21 years studying Communication Information Systems, <br/> at DELTA Academy for management and Accounting Information Systems.</p>
                <div className={'btns'}>
                    <a target={'_blank'} href={'https://drive.google.com/file/d/18w50KXsLsqp1pCQO8raihGFzbHpuUMyB/view?usp=sharing'} className={'cv'}>cv</a>
                    <a target={"_blank"} className={'linkedIn active'} href={'https://www.linkedin.com/in/ashraf-mohamed-b931a7236'}>linkedIn</a>
                </div>
          </div>
      </div>
    </div>
        <Skills />
        <Projects />
      </>
  );
}
