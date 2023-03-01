import React from 'react'

import FCompany from './FCompany'
import FLinks from './FLinks'
import FSEN from './FSEN'
import FProducts from './FProducts'
import FStackOverflow from './FStackOverflow'
import logo from '../../assests/stkovrflw.svg'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <div className="fitem-0 fitem">
        <img src={logo} alt="logo" width={50} />
      </div>
      <div className="fitem-1 fitem">
        <FStackOverflow />
      </div>
      <div className="fitem-2 fitem">
        <FProducts />
      </div>
      <div className="fitem-3 fitem">
        <FCompany />
      </div>
      <div className="fitem-4 fitem">
        <FSEN />
      </div>
      <div className="fitem-5 fitem">
        <FLinks />
      </div>
    </div>
      </>
  )
}

export default Footer