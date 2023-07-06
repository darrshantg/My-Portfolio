import React from 'react'

import {AiOutlineInstagram} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo'>DARRSHAN</a>

      <ul className='links'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/darrshan1905'><AiOutlineInstagram/></a>
        <a href='https://discordapp.com/users/Darrshan T G#8763'><BsDiscord/></a>
        <a href='https://twitter.com/DarrshanTG'><AiOutlineTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer