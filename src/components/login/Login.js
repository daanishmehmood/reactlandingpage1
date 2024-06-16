import React from 'react'
import './login.css'
import login from '../assets/login.png';
import logo from '../assets/Logo.png';

const Login = () => {
  return (
    < >
      <div className="row">
        <div className="col-md-6 d-lg-block d-none">
            <div className="login-img">
                <img src={login} alt="" />
            </div>
        </div>
        <div className="col-lg-6">
           <div className="logo-img d-flex justify-content-center">
            <img src={logo} alt="" />
           </div>
           <div className="login-form">
           <form>
            <h2 className='mb-3'>SignUp</h2>
  <div className="form-group">
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
    <input type="number" className="form-control" id="typePhone" placeholder="Enter phone number"/>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="confirm Password"/>

  </div>

  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">I Understand the Term and services</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
           </div>
        </div>
      </div>
    </>
  )
}

export default Login
