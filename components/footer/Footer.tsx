import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer__div">
      <img className="w-24" 
       src='../images/amazon.png' 
       alt="logo" />
      <p className="footer__text">
        All rights reserved{" "}
        <a
          className="footer__link"
          href="/"
          target="_blank"
        > @amazon.it
        </a>
      </p>
    </div>
  )
}

export default Footer
