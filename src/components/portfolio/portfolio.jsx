import React from 'react'

import contacts from '../../assets/contacts-backend.jpg'
import citportal from '../../assets/citportal.jpg'
import gan from '../../assets/GAN.jpg'
import placeshare from '../../assets/placeshare.jpg'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfloio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={contacts} alt='contacts-api'/>
          </div>
          <h3>My Contacts API</h3>
          <div className='portfolio__item-cta'>
            <a href='https://www.github.com/darrshantg/contacts-backend' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          </div> 
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={citportal} alt='citportal'/>
          </div>
          <h3>A Portal For Attendance And Marks</h3>
          <div className='portfolio__item-cta'>
            <a href='https://www.github.com/darrshantg/CITPortal' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={gan} alt='GAN_fake_image_generation'/>
          </div>
          <h3>Generative Adversarial Neural Networks</h3>
          <div className='portfolio__item-cta'>
            <a href='https://www.github.com/darrshantg/GAN_fake_image_generation' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          </div>  
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={placeshare} alt='placeshare app'/>
          </div>
          <h3>Place Share Fullstack App</h3>
          <div className='portfolio__item-cta'>
            <a href='https://www.github.com/darrshantg/placeshare-frontend' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href='https://placeshare-frontend.web.app' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Website</a>
          </div>
        </article>
      </div>      
    </section>
  )
}

export default Portfolio