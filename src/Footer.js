import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div className="footerSection">
    <div className="ft-left">
      <p className="first ft-left-content">Prompt Generator</p>
      <p className="ft-left-content">Dweep Daily</p>
      <p className="ft-left-content">All Contributors</p>
      <p className="ft-left-content">Your data on Dweep.io</p>
      <p className="ft-left-content">Contribute to Dweep</p>
    </div>
    <div className="ft-right">
      <p className="first-right ft-right-content">Dweep.io</p>
      <span className="ft-right-content1">Made with love in India</span>
      <div className="icons ft-right-content">
        <img src="LinkedinLogo.png" alt="linkedin icon" className="linkedin" />
        <img src="InstagramLogo.png" alt="instagram icon" className="instagram" />
      </div>
      <br />
      <p className="ft-right-content">hello@dweep.io</p>
    </div>
  </div>
  
  )
}
export default Footer;