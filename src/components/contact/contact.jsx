import React, { useRef } from 'react';

import emailjs from 'emailjs-com';

import {MdMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m13v80q', 'template_ie217yg', form.current, '4cwWa42yy0nrfzjtL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className='contact__option'>
            <MdMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>darrshan1905@gmail.com</h5>
            <a href='mailto:darrsham1905@gmail.com' target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7010707041</h5>
            <a href='https://wa.me/+917010707041' target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email ID' required/>
          <input type='textarea' name='message' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact