import React from 'react'
import './Navbar.css'
import logo from '../assets/Logo.png';
// import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary py-3">
  <div className="container">
    <a className="navbar-brand" href='/'><img src={logo} alt="" /></a>
      <button  className="btn user-btn fs-13 fw-600" type="submit">Login/Sign Up</button>
  </div>
</nav>
    </>
  )
}

export default Navbar
