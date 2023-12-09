import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

const form = useRef();
// sent email by mailJs
const sendEmail = (e) => {
  e.preventDefault();
  // information account emailJs
  emailjs.sendForm('service_2jd6ttc', 'template_3q4wxrp', form.current, 'PmARZnCEW1lngVqiK')
    .then((result) => {
          Swal.fire(
            'Email sent successfully',
            'we well calling you in the email',
            'success'
          )
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    });
};

  return (
    <div className='contact-me' id='contact'>
    <h2 className='contact-title'>Contact</h2>
    <div className="callMe">
      <div className="contentContact text">
        <p className='contact-descreption'>
        I'm currently looking to join a cross-functional team that values improving people's lives
        through accessible design. or have a project in mind? Let's connect.
        </p>
        <a href='./' className='contactLink'>aashraf9919@gmail.com</a>
        <p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13140.299547951547!2d31.80017966288834!3d31.248168895946602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE0JzQ2LjgiTiAzMcKwNDgnMzkuMyJF!5e0!3m2!1sar!2seg!4v1702154454899!5m2!1sar!2seg" width="500" height="350" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </p>
      </div>
      <div className="contentContact form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputFaild">
            <label htmlFor="user_name">name</label>
            <input  type="text" name="user_name" id="user_name" placeholder='inter your name' />
          </div>
          <div className="inputFaild">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" placeholder='inter your email' />
          </div>
          <div className="inputFaild">
            <label htmlFor="user-project">message</label>
            <textarea type="text" name="user-project" id="user-project" rows={5} placeholder='type mesaage' />
          </div>
          <button className='btnSentMail' value="Send">
            sent
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg>
          </button>
        </form>
      </div>
      </div>
  </div>
  )
}

export default Contact