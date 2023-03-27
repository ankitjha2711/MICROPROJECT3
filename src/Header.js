import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className="headerSection">
  <div className="left">
    <h1 className="title">
      An inspiring design delivered to your inbox every morning
    </h1>
    <p className="content">
      Our team scouts the internet for the best designs, illustrations and art
      and delivers a truly inspiring one every day to your inbox
    </p>
    <p className="sub-content">
      <b> Show me how it looks</b>
    </p>
    <div className="form">
      <input type="text" placeholder="Your e-mail address" className="input" />
      <button className="btn">Register Now</button>
    </div>
    <p className="sub-sub-content">Free - No Spam - No Data Sharing</p>
  </div>
  <div className="right">
    <img src="dweep_image.png" alt="imgdweep" className="dweep-image" />
  </div>
</div>

  )
}
export default Header;