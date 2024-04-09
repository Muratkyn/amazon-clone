import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer_div">
      <img className="w-24" 
       src='../images/amazon.png' 
       alt="logo" />
      <p className="footer_text">
        All rights reserved{" "}
        <a
          className="footer_link"
          href="/"
          target="_blank"
        > @amazon.it
        </a>
      </p>
    </div>
  )
}

export default Footer
