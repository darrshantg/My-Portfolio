import React from 'react'

import {BiCheck} from 'react-icons/bi'

import './services.css'

const Services = () => {
  return (
    <section id = 'services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A seperate frontend solution</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A seperate backend solution</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintaining and integration of databases</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hosting and maintaining of a complete fullstack web application</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Android app development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX and UI mobile app design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Native (Java, Kotlin) Android app development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cross-platform (with React Native, Flutter) development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Assistance with publishing and maintaining apps on Google Play</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services

 
 
