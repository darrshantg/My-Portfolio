import React from 'react'

import CTA from './CTA'
import ME from '../../assets/profile2.png'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id = "header">
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Darrshan T G</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

        <CTA/>

        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt=''/>
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>

      </div>
    </header>
  )
}

export default Header