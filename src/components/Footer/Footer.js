import React from 'react'
import "./footer.css"
import logo from '../../assets/Subia_Name_Logo.gif'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export const Footer = () => {
  return (

    <section className='footer-section'>
      {/* <img src={logo} alt=""  width="90px"/> */}
      {/* <h4>{logo}</h4> */}
      {/* <h6>Seeking agents/Publisher</h6> */}
      {/* <div className='icons'>
            <AiOutlineTwitter className='icon'/>
            <FiFacebook  className='icon'/>
            <AiOutlineInstagram  className='icon'/>
            </div> */}
      <div className="d-flex w-80 justify-content-around my-3" style={{ width: "60%" }}>
        <AiOutlineTwitter className='icon' />
        <FiFacebook className='icon' />
        <AiOutlineInstagram className='icon' />
      </div>

      <span className='text-center' style={{ fontSize: "11px" }}>COPYRIGHT &copy; 2022 SUBIA J. ALI. SITE BY SUPERSOFT CORP.</span>
    </section>

  )
}
