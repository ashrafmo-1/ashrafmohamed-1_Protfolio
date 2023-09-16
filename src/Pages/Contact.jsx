import './contact.css'
// sent emails
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
// sweat alerts
import Swal from 'sweetalert2'

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_if6rb7o', 'template_ux13w6b', form.current, 'UROqKXJg60r1JBwls')
            .then((result) => {Swal.fire('done', 'your mail is sent', 'success')},
            (error) => {Swal.fire({icon: 'error', title: 'Oops...', text: 'Something went wrong!'} , error)})
    };

    return (
        <div>
            <div className="contact .container">
                <h1 className='mainHeader' style={{ textAlign: 'center' }}>contact me</h1>
                <div className='containerFromCOmp'>
                    <div className={'all-content'}>
                        <form ref={form} onSubmit={sendEmail}>
                            <h3 className={'headerSec'}>write my your project</h3>
                            <div className="name-sec">
                                <label htmlFor={''}>> name</label>
                                <input name="user_name" type="name" className="form-control" id={''} aria-describedby="emailHelp" placeholder="enter name" required />
                            </div>
                            <div className="mail-sec">
                                <label htmlFor={''}>> e-mail</label>
                                <input name="user_email" type="email" className="" id={''} placeholder="email" required />
                            </div>
                            <div className="proj-sec">
                                <label>> type your project</label>
                                <textarea name="message" placeholder="type your project" required />
                            </div>
                            <button type="submit" className="btnSent">send</button>
                        </form>
                        <div className={'talk'}>
                            <h3 className={'headerSec'}>talk to my</h3>
                            <div className="contacts">
                                <a className={'social'} href={'https://www.facebook.com/ASHRAFMoOoHAMED'}>> <button className={'btn'}> facebook </button></a>
                                <a className={'social'} href={'mailto:ashrafmohamed1176@gmail.com'}>> <button className={'btn'}>email</button> </a>
                                <a className={'social'} href={'/'}>> <button className={'btn'}>whatsApp</button></a>
                                <a className={'social'} href={'https://github.com/ashrafmo-1'}>> <button className={'btn'}>github</button></a>
                                <a className={'social'} href={'/'}>> <button className={'btn'}>discord</button></a>
                                <a className={'social'} href={'https://www.linkedin.com/in/ashraf-mohamed-b931a7236'}>> <button className={'btn'}>linkedIn</button></a>
                                <a className={'social'} href={'https://www.linkedin.com/in/ashraf-mohamed-b931a7236'}>> <button className={'btn'}> cv </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}