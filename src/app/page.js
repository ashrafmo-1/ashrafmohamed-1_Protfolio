import Image from "next/image";
import Navgation from "./nvgation bar/Navgation";
import HomePage from "./home/Home";
import Skils from "./skills/Skills";
import Aboutus from "./about/Aboutus";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <>
    <main className=" w-11/12 m-auto">
      <Navgation />
      <HomePage />
      <Aboutus />
      <Skils />
      <Contact />
    </main>
    <p className="text-white text-center text-2xl py-3" style={{backgroundColor: "var(--second-color)"}}>© 2024 Front-End Assistant. All rights reserved.</p>
    </>
  );
}
