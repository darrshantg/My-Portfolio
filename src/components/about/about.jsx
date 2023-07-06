import React from 'react'

import {IoMdSchool} from 'react-icons/io'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

import aboutimg from '../../assets/aboutimg.jpg'
import './about.css'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src = {aboutimg} alt = "About"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <IoMdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>BE CSE Coimbatore Institute of Technology</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years in development</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8 completed projects</small>
            </article>
          </div>

          <p>
            I am a passionate full-stack developer with a keen interest in networks and Android app development. I believe in the power of technology to shape the world and solve complex problems, which is what drove me to pursue a career in software development.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About