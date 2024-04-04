import React from 'react'

const Footer = () => {
  return (
    <div className="w-full md:w-full h-20 bg-amazonColors-lightBlue text-gray-300 flex items-center justify-center gap-4">
      <img className="w-24" src='../images/amazon.png' alt="logo" />
      <p className="text-sm -mt-4">
        All rights reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="/"
          target="_blank"
        >
          @amazon.it
        </a>
      </p>
    </div>
  )
}

export default Footer
