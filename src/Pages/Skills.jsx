import React from 'react'
import { FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'

export default function Skills() {
return (
<div className="containerFromCOmp" style={{ minHeight: "calc(100vh - 101px)" }}>
<div style={{paddingTop: '50px'}}>
<h1 className='mainHeader' style={{ textAlign: 'center' }}>Skills</h1>
<div className="skillsContent">
<div className="box">
<h1 style={{color: 'red', fontSize: '70px'}}><FaHtml5 /></h1>
<h3>html: 5</h3>
</div>
<div className="box">
<h1 style={{color: 'blue', fontSize: '70px'}}><FaCss3Alt /></h1>
<h3>css: 3</h3>
</div>
<div className="box">
<h1 style={{color: 'yellow', fontSize: '70px'}}><FaJs /></h1>
<h3>javaScript</h3>
</div>
<div className="box">
<h1 style={{color: 'blue', fontSize: '70px'}}><FaReact /></h1>
<h3>react</h3>
</div>
<div className="box">
<h1 style={{color: 'blue', fontSize: '70px'}}><FaBootstrap /></h1>
<h3>Bootstrap</h3>
</div>
<div className="box">
<h1 style={{color: '#777', fontSize: '70px'}}><FaGithub /></h1>
<h3>Github</h3>
</div>
<div className="box">
<h1 style={{color: 'red', fontSize: '70px'}}><FaGitAlt /></h1>
<h3>Git</h3>
</div>
<div className="box">
<h1 style={{color: 'green', fontSize: '70px'}}><FaFigma /></h1>
<h3>Figma</h3>
</div>
</div>
</div>
</div>
)
}