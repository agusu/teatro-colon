import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/logo-white.svg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="# " className="image logo">
        <img src={logo} alt="Teatro Colón" />
      </a>
      <h1>
      Subasta de <strong>NFTs (Tokens No Fungibles)</strong> <br/>
      
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
