"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import skillsData from './skills.json'
import "./skils.css";

const Skils = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData.skills);
  }, []);

  return (
    <section className='pt-32' id='skills'>
      <div className="skills" id="skills">
      <h1 className="skillsTitle">My favorite skills</h1>
      <div className="skills-boxes">
        {skills.map((skill, index) => (
          <div className="box" key={index}>
            <Image src={skill.image.replace('/public', '')} width={40} height={40} alt={skill.name} />
            <p className="title">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Skils