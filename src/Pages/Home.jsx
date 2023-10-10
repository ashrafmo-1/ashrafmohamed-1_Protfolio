import Projects from "./Projects";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDiscord,
  FaFacebook,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa6";

import { FcCommandLine } from "react-icons/fc";
import React from "react";
import Information from "../components/home/Information";
import {BiLogoRedux} from "react-icons/bi";

export default function Home() {
  return (
    <>
      <div className="containerFromCOmp" style={{ minHeight: "calc(100vh)" }}>
        <div className="homeContent">
          <Information />
          <div className={"jop-information"}>
            <p className={"title"} style={{ marginBottom: "15px" }}>
              {" "}
              <span>{">"}</span> front end developer <br /> ( Started in 2022 to
              far )
            </p>
            <p className={"title"}>
              {" "}
              <span> {">"} </span> Study business information systems at DELTA
              Academy <br /> ( Started in 2021 to far )
            </p>
            <p
              className={"title"}
              style={{ paddingLeft: "20px", marginTop: "30px" }}
            >
              {" "}
              <span className={"turnIcon"}> {">"} </span> skills{" "}
            </p>
            <section className={"Home-skills"}>
              <div className="box">
                <h1 style={{ color: "red" }} className="flex-center">
                  <FaHtml5 />
                  {"html"}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "blue" }} className="flex-center">
                  <FaCss3Alt /> {"css"}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "yellow" }} className="flex-center">
                  <FaJs /> {"js"}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "blue" }} className="flex-center">
                  <FaReact />
                  {"react"}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "#6c0ff3" }} className="flex-center">
                  <FaBootstrap /> {"bootstrap"}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "#777" }} className="flex-center">
                  <FaGithub /> {" github "}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "red" }} className="flex-center">
                  <FaGitAlt /> {"git"}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "green" }} className="flex-center">
                  <FaFigma />
                  {"figma"}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "#764ABC" }} className="flex-center">
                  <BiLogoRedux />
                  {"redux"}
                </h1>
              </div>
              <div className="box">
                <h1 style={{ color: "#999" }} className="flex-center">
                  <FcCommandLine />
                  {"command"}
                </h1>
              </div>
            </section>
            <p
              className={"title"}
              style={{
                paddingLeft: "20px",
                marginTop: "30px",
                marginBottom: "20px",
              }}
            >
              {" "}
              <span className={"turnIcon"}>{">"}</span> Communication{" "}
            </p>
            <div className={"Communication"}>
              <a
                style={{
                  color: "blue",
                  backgroundColor: "#eee",
                  borderRadius: "50%",
                  lineHeight: ".6",
                  padding: "5px",
                }}
                href={"https://www.facebook.com/ASHRAFMoOoHAMED"}
              >
                <FaFacebook />
              </a>
              <a
                style={{
                  color: "#eee",
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  lineHeight: ".6",
                  padding: "5px",
                }}
                href={"https://discord.com/users/870623473901371412"}
              >
                <FaDiscord />
              </a>
              <a
                style={{
                  color: "#eee",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  lineHeight: ".6",
                  padding: "5px",
                }}
                href={
                  "https://api.whatsapp.com/send/?phone=%2B201007481557&text&type=phone_number&app_absent=0"
                }
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}
