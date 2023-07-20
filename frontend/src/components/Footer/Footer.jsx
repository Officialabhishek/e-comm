import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';

import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='top'>
          <div className='topChild'>
            <h3>Categories</h3>
            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
            <span>Accesories</span>
            <span>New Arrivals</span>
          </div>
          <div className='topChild'>
            <h3>Links</h3>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className='topChild'>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className='topChild'>
            <h3>Contact</h3>
            <div className='social'><MailOutlineIcon /></div>
            <div className='social'><FacebookIcon /></div>
            <div className='social'><InstagramIcon /></div>
            <div className='social'><TelegramIcon /></div>
          </div>
        </div>
        <div className='bottom'>
          <div className='left'><h2>Kapde</h2></div>
          <div className='right'>
            <p>© copyright 2023. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;