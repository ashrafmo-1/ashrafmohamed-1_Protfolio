import projCalc from "../assets/Projects/proj-10.png";
import projWeather from "../assets/Projects/weather-site.png";
import projTHree from "../assets/Projects/proj-8.png";
import projhome from "../assets/Projects/proj-12.png";
import projsearch from "../assets/Projects/search (1).png";
import pagecustomizer from "../assets/Projects/page customize.png";
import ecommerce from "../assets/Projects/e-commerce.png";
import education from "../assets/Projects/Asheducation.png";
import Swal from "sweetalert2";
import React from "react";

export default function Projects() {
  return(
      <div className="containerFromCOmp" style={{ paddingTop: "40px" }}>
        <h1 className="mainHeader" style={{ textAlign: "center" }}> projects </h1>
        <div className="ProjectContent">
          <div className="box">
            <img className="projectImage" src={projhome} alt="done" />
            <h3 style={{marginBottom: '10px'}} className={'project-title'}> home design </h3>
            <div className="btnsInfo">
              <button> src code </button>
              <button> open site </button>
            </div>
          </div>
          <div className="box">
            <img className="projectImage" src={projTHree} alt="done" />
            <h3 style={{marginBottom: '10px'}} className={'project-title'}> information team </h3>
            <div className="btnsInfo">
              <button> src code </button>
              <button> open site </button>
            </div>
          </div>
          <div className="box">
            <img className="projectImage" src={projWeather} alt="done" />
            <h3 style={{marginBottom: '10px'}} className={'project-title'}> weather </h3>
            <div className="btnsInfo">
              <button> src code </button>
              <button> open site </button>
            </div>
          </div>
          <div className="box">
            <img className="projectImage" src={projsearch} alt="done" />
            <h3 style={{marginBottom: '10px'}} className={'project-title'}> search </h3>
            <div className="btnsInfo">
              <button> src code </button>
              <button> open site </button>
            </div>
          </div>
          <div className="box">
            <img className="projectImage" src={pagecustomizer} alt="" />
            <h3 style={{marginBottom: '10px'}} className={'project-title'}> dynamic changing </h3>
            <div className="btnsInfo">
              <button> src code </button>
              <button> open site </button>
            </div>
          </div>
          <div className="box">
            <img className="projectImage" src={ecommerce} alt="" />
            <h3 style={{marginBottom: '10px'}} className={'project-title'}> e-commerce </h3>
            <div className="btnsInfo">
              <button> src code </button>
              <button> open site </button>
            </div>
          </div>
          <div className="box">
            <img className="projectImage" src={projCalc} alt="" />
            <h3 style={{marginBottom: '10px'}} className={'project-title'}> calculater </h3>
            <div className="btnsInfo">
              <button> src code </button>
              <button> open site </button>
            </div>
          </div>
          <div className="box">
            <img className="projectImage" src={education} alt="" />
            <h3 style={{marginBottom: '10px'}} className={'project-title'}> education programming </h3>
            <div className="btnsInfo">
              <button> src code </button>
              <button> open site </button>
            </div>
          </div>
        </div>
      </div>
  )
}
