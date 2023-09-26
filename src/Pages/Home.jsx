import Projects from "./Projects";
import portfolioImage from "../assets/image/cv.jpg";
import {
    FaBootstrap,
    FaCss3Alt, FaDiscord, FaFacebook,
    FaFigma,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaJs,
    FaReact,
    FaSass,
    FaWhatsapp
} from "react-icons/fa6";
import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="containerFromCOmp" style={{ minHeight: "calc(100vh)" }}>
        <div className="homeContent">
          <div className="information">
            <img className="portfolioImage" src={portfolioImage} />
            <p className={'my-info'}><span>name:</span> ashraf mohamed</p>
            <p className={'my-info'}><span>age:</span> 21</p>
            <p className={'my-info'}><span>jop:</span> front end developer</p>
            <p className={'my-info'}><span>Nationality:</span> Egyptian</p>
            <p className={'my-info'}><span>Study:</span> Business information systems (BIS)</p>
            <p className={'my-info'}><span>Study:</span> Egyptian</p>
          </div>
          <div className={'jop-information'}>
            <p className={'title'} style={{marginBottom: '15px'}}> <span>></span> front end developer <br/> ( Started in 2022 to far )</p>
            <p className={'title'}> <span>></span> Study business information systems at DELTA Academy  <br/> ( Started in 2021 to far )</p>
            <p className={'title'} style={{paddingLeft: '20px', marginTop: '30px'}}> <span className={'turnIcon'}>></span> skills </p>
            <section className={'Home-skills'}>
                <div className="box">
                  <h1 style={{ color: "red" }}> <FaHtml5 />  </h1>
                </div>
                <div className="box">
                  <h1 style={{ color: "blue" }}> <FaCss3Alt /> </h1>
                </div>
                <div className="box">
                  <h1 style={{ color: "yellow" }}> <FaJs />  </h1>
                </div>
                <div className="box">
                  <h1 style={{ color: "blue" }}> <FaReact /> </h1>
                </div>
                <div className="box">
                  <h1 style={{ color: "blue" }}> <FaBootstrap /> </h1>
                </div>
                <div className="box">
                  <h1 style={{ color: "#777" }}> <FaGithub /> </h1>
                </div>
                <div className="box">
                  <h1 style={{ color: "red" }}> <FaGitAlt /> </h1>
                </div>
                <div className="box">
                  <h1 style={{ color: "green" }}> <FaFigma /> </h1>
                </div>
                <div className="box">
                  <h1 style={{ color: "#bf4080" }}> <FaSass /> </h1>
                </div>
            </section>
            <p className={'title'} style={{paddingLeft: '20px', marginTop: '30px', marginBottom: '20px'}}> <span className={'turnIcon'}>></span> Communication </p>
            <div className={'Communication'}>
                <a style={{color: 'blue', backgroundColor: '#eee', borderRadius: '50%', lineHeight: '.6', padding: '5px', }} href={'https://www.facebook.com/ASHRAFMoOoHAMED'}><FaFacebook /></a>
                <a style={{color: '#eee', backgroundColor: 'blue', borderRadius: '50%', lineHeight: '.6', padding: '5px', }} href={''}><FaDiscord /></a>
                <a style={{color: '#eee', backgroundColor: 'green', borderRadius: '50%', lineHeight: '.6', padding: '5px', }} href={''}><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}
