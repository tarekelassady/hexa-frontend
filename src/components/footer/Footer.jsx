import React from 'react'
import "./Footer.css"
import footerParallaxImg from "../../assets/footerhexagongre.png"
import {RiMapPin2Fill,RiPhoneFill,RiMailFill} from "react-icons/ri"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_cityimg'>
      </div>
      <div className='footer_content'>
        <div className='footer_content-info'>
          <div className='footer_content-info_contacts'>
            <div className='footer_content-info_contacts-address'>
              <RiMapPin2Fill />
              <h4>Hurghada, Red Sea, Egypt</h4>
            </div>
            <div className='footer_content-info_contacts-phone'>
              <RiPhoneFill />
              <h4>+201002670027</h4>
            </div>
            <div className='footer_content-info_contacts-email'>
              <RiMailFill />
              <h4>support@hexaproweb.com</h4>
            </div>
          </div>
          <div className='footer_content-info_usefullinks'>
            <p className='footer_content-info_usefullinks-about'>About</p>
            <p className='footer_content-info_usefullinks-contact'>Contact</p>
          </div>
        </div>
        <div className='footer_content-copyright'>
          <h1>© Hexa Web Solutions 2020 All Rights Reserved. Designed and developed by <span className='footer_content-copyright_hexa'>Hexa</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Footer