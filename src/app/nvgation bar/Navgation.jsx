"use client"
import React from "react";
// import { HashLink as Link } from 'react-router-hash-link'
import "./nav.css";
import Image from "next/image";
import menu from "../../../public/assets/menu-bar.png";
import Link from "next/link"
const Navgation = () => {
  return (
    <header className="flex justify-between items-center p-2 rounded-xl fixed m-auto">
      <h1 className="nav-title">
        <span>AS</span>hraf mohamed
      </h1>
      <nav className="navgation flex gap-6">
        <Link href={"#home"}>
          Home
        </Link>
        <Link href={"#aboute"}>
          About
        </Link>
        <Link  href={"#skills"} smooth={true} offset={-50} duration={400}>
          Skills
        </Link>
        <a href={"https://webapps-projects.vercel.app/"} target="_blank">
          Projects
        </a>
        <Link href={"#contact"} to="contact" smooth={true} offset={-50} duration={400} >
          Contact Us
        </Link>
      </nav>
      <div className="toggleBar rounded cursor-pointer" onClick={() => document.querySelector(".navgation").classList.toggle("active") } >
        <Image src={menu} width={30} height={30} alt="" />
      </div>
    </header>
  );
};

export default Navgation;