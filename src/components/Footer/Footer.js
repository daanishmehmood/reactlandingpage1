import React from 'react'
import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';
import twitter from '../assets/Twitter.png';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <>
      <div className="container">
    <div className="footer-logo">
      <a href="/"><img className='my-lg-5 mb-4' src={logo} alt="" /></a>
    </div>
    <div className="row">
      <div className="col-lg-3">
        <ul>
          <li className='mb-3'><a className=' fs-18 fw-600 fc1 ' href="/">About Us</a></li>
          <li className='mb-2'><a className='fs-14 fw-600 fc2' href="/">About splitMart</a></li>
          <li className='mb-2'><a className=' fs-14 fw-600 fc2' href="/">Contact us</a></li>
        </ul>
      </div>
      <div className="col-lg-3">
        <ul>
          <li className='mb-3'><a className=' fs-18 fw-600 fc1 ' href="/">How to</a></li>
          <li className='mb-2'><a className='fs-14 fw-600 fc2' href="/">list</a></li>
          <li className='mb-2'><a className=' fs-14 fw-600 fc2' href="/">Book</a></li>
        </ul>
      </div>
      <div className="col-lg-3">
        <ul>
          <li className='mb-3'><a className=' fs-18 fw-600 fc1 ' href="/">More links</a></li>
          <li className='mb-2'><a className='fs-14 fw-600 fc2' href="/">Terms of service</a></li>
          <li className='mb-2'><a className=' fs-14 fw-600 fc2' href="/">Privacy and policy</a></li>
        </ul>
      </div>
      <div className="col-lg-3">
        <ul>
          <li className='mb-3'><a className=' fs-18 fw-600 fc1 ' href="/">SplitMart</a></li>
          <li className='mb-2'><a className='fs-14 fw-600 fc2' href="/">Save, earn, and connect with people near you</a></li>
          <li className='mt-4 d-flex align-items-center'><a className='mr-4 footer-ic' href="/"><img src={facebook} alt="" /></a><a className='mr-4 footer-ic' href="/"><img src={twitter} alt="" /></a><a className='mr-4 footer-ic' href="/"><img src={instagram} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="d-flex justify-content-between my-5 align-items-center">
      <span>©2023 SplitMart, Inc. All rights reserved.</span>
      <div class="dropdown">
  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  USA (English)  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/">Action</a>
    <a class="dropdown-item" href="/">Another action</a>
    <a class="dropdown-item" href="/">Something else here</a>
  </div>
</div>
    </div>
  </div>
    </>
  )
}

export default Footer
