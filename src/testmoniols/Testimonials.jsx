import React from 'react';
import avatar from './assets/avatar.png';

const Testimonials = () => {

    return (
    <div className='testimonials'>
            <h2 className='contact-title'>Testimonials</h2>
            <div className="boxes">
                <div className="box">
                    <div className="img">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="text">
                        <h2 className="adderss">Ahmed eltohamy</h2>
                        <p>perfect mentor programming i am learn javaScript from ASH-Education.</p>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Testimonials;