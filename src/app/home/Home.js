"use client"
// import Theme from "../themes/Theme";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image"
// social Media images
import linkedIn from "../../../public/assets/socoalmedia/linkedin.png"
import github from "../../../public/assets/socoalmedia/github.png"
import whatsapp from "../../../public/assets/socoalmedia/whatsapp.png"
import cv from "../../../public/assets/socoalmedia/curriculum-vitae.png"
import facebook from "../../../public/assets/socoalmedia/facebook.png"
import instagram from "../../../public/assets/socoalmedia/instagram.png"

const HomePage = () => {
  return (
    <div className="landing text-start flex justify-center h-screen relative pt-32" id="#home">
      <div className="content">
        <h1 className="head-name text-6xl font-bold capitalize" style={{color: "var(--text)"}}>
          <span>Hello! I'am</span>
          <span className="text-5xl ml-2" style={{color: "var(--second-color)"}}>
            <Typewriter
              words={["Ashraf Mohamed"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className="socialMediaAndSomeLinks flex gap-3">
          <a target="_blank" href="https://www.linkedin.com/in/ashraf-mohamed-b931a7236/"><Image className=" bg-slate-200 p-2 rounded-md cursor-pointer" src={linkedIn} width={40} height={30}  alt="" /></a>
          <a target="_blank" href="https://github.com/ashrafmo-1"><Image className=" bg-slate-200 p-2 rounded-md cursor-pointer" src={github} width={40} height={30}  alt="" /></a>
          <a target="_blank" href="https://www.facebook.com/ASHRAFMoOoHAMED"><Image className=" bg-slate-200 p-2 rounded-md cursor-pointer" src={facebook} width={40} height={30}  alt="" /></a>
          <a target="_blank" href="https://www.instagram.com/01_ash_/?hl=en"><Image className=" bg-slate-200 p-2 rounded-md cursor-pointer" src={instagram} width={40} height={30}  alt="" /></a>
          <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B201007481557&text&type=phone_number&app_absent=0"><Image className=" bg-slate-200 p-2 rounded-md cursor-pointer" src={whatsapp} width={40} height={30}  alt="" /></a>
          <a target="_blank" href="https://drive.google.com/file/d/1R8cWBNP6k0NhUfSPs1ZsuC2diVwa5pbl/view?usp=sharing"><Image className=" bg-slate-200 p-2 rounded-md cursor-pointer" src={cv} width={40} height={30}  alt="" /></a>
        </div>
        <button className="projects w-96 h-16 mt-5 border border-gray-50 rounded-md text-4xl">
          <a href="https://webapps-projects.vercel.app/" target="blank" style={{color: "var(--text)"}}>Project Gallery</a>
        </button>

        <span className="jopTitle text-8xl uppercase font-extrabold" style={{color: "var(--text)"}}>
          <Typewriter
            words={[
              "front end Developer",
              "javascript Developer",
              "typescript Developer",
              "react Developer",
            ]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={200}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </div>
      {/* <Theme /> */}
    </div>
  );
};