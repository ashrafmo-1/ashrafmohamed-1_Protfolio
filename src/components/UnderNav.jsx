import React from 'react'

import { FaGithub, FaDiscord, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function UnderNav() {
return (
<div className="container" style={{borderTop: '1px solid #777'}}>
<div className="social">
<Link to={'/'} className='socialLink'><FaGithub /></Link>
<Link to={'/'} className='socialLink'><FaDiscord /></Link>
<Link to={'/'} className='socialLink'><FaFacebook /></Link>
<Link to={'/'} className='socialLink'><FaLinkedinIn /></Link>
</div>
</div>
)
}