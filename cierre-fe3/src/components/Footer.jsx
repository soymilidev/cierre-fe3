import React from 'react'
import dh from '../assets/DH.png'
import icofacebook from '../assets/ico-facebook.png'
import icoinstagram from '../assets/ico-instagram.png'
import icotiktok from '../assets/ico-tiktok.png'
import icowhatsapp from '../assets/ico-whatsapp.png'


const Footer = () => {
  return (
    <footer className='state'>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p>Powered by</p>
        <a href='https://www.digitalhouse.com/ar'><img src={dh} alt='DH-logo' /></a>
      </div>
      <div className='footer-icons'>
        <a href='https://www.facebook.com'><img src={icofacebook} alt='logo de facebook' /></a>
        <a href='https://www.instagram.com'><img src={icoinstagram} alt='logo de instagram' /></a>
        <a href='https://www.tiktok.com'><img src={icotiktok} alt='logo de tiktok' /></a>
        <a href='https://www.whatsapp.com'><img src={icowhatsapp} alt='logo de whatsapp' /></a>
      </div>
    </footer>
  )
}

export default Footer