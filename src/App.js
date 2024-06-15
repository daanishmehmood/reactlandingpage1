// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import logo from './App_images/Logo.png';
// import user from './App_images/user-image.svg';
import list from './App_images/List.png';
import search from './App_images/search.svg';
import training from './App_images/training.png';
import Pilates from './App_images/pilates.png';
import Sports from './App_images/sports.svg';
import Weight from './App_images/muscle.png';
import Yoga from './App_images/Yoga.png';
import Martial from './App_images/boxing.png';
import Swimming from './App_images/Swimming.png';
import clock from './App_images/Time.png';
import calender from './App_images/calendar.png';
import box from './App_images/listing1.png';
import box1 from './App_images/listing2.png';
import box2 from './App_images/listing3.png';
import box3 from './App_images/listing4.png';
import box4 from './App_images/listing5.png';
import box5 from './App_images/listing6.png';
import card from './App_images/card.jpeg';
import message from './App_images/message-square.png';
import comas from './App_images/“.png';
import facebook from './App_images/Facebook.png';
import instagram from './App_images/Instagram.png';
import twitter from './App_images/Twitter.png';
import connect from './App_images/connect.svg';
import enjoy from './App_images/sentiment_satisfied.svg';
import describe from './App_images/message-square.png';
import check from './App_images/check.svg';
import earn from './App_images/dollar.svg';
import add from './App_images/add.svg';



function App() {
  const [activeButton, setActiveButton] = useState(
    localStorage.getItem('activeButton') || 'btn-1' // Set default to 'btn-1'
  );

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    localStorage.setItem('activeButton', buttonId);
  };


  return (
 <>
<nav className="navbar bg-body-tertiary py-3">
  <div className="container">
    <a className="navbar-brand" href='/'><img src={logo} alt="" /></a>
      <button className="btn user-btn fs-13 fw-600 mt-sm-2 " type="submit">Login/Sign Up</button>
  </div>
</nav>
{/* <hr /> */}
<main>
     <div className="container group-section">
      <h1 className='text-center mt-md-5 d-none d-md-block'>Join <span className='fs-italic text-primary '>group</span> or 1:1 sessions near you for fitness and sports training</h1>
      <h3 className='my-4 text-center d-block d-sm-block d-md-none fs-22 fw-700'>Find affordable <span className='fs-italic text-primary'>services</span> in your area</h3>
      <div className="catagories my-md-5 my-sm-3">
        <ul className='pl-0'>
          <li>
            <a href="/" 
            className={` ${activeButton === 'btn-1' ? 'active' : ''}`}
            onClick={() => handleClick('btn-1')}
            ><span><img src={list} alt="" /></span><span className='d-none d-md-block'>All</span></a>
            <a href="/" 
               className={`${activeButton === 'btn-2' ? 'active' : ''}`}
        onClick={() => handleClick('btn-2')}
            ><span><img src={training} alt="" /></span><span className='d-none d-md-block'>Personal Training</span></a>
            <a href="/"
            className={`${activeButton === 'btn-3' ? 'active' : ''}`}
            onClick={() => handleClick('btn-3')}
            ><span><img src={Pilates} alt="" /></span><span className='d-none d-md-block'>Pilates</span></a>
            <a href="/"
            className={`${activeButton === 'btn-4' ? 'active' : ''}`}
            onClick={() => handleClick('btn-4')}
            ><span><img src={Sports} alt="" /></span><span className='d-none d-md-block'>Sports</span></a>
            <a href="/" 
            className={`${activeButton === 'btn-5' ? 'active' : ''}`}
            onClick={() => handleClick('btn-5')}
            ><span><img src={Weight} alt="" /></span><span className='d-none d-md-block'>Weight</span></a>
            <a href="/"
            className={`${activeButton === 'btn-6' ? 'active' : ''}`}
            onClick={() => handleClick('btn-6')}
            ><span><img src={Yoga} alt="" /></span><span className='d-none d-md-block'>Yoga</span></a>
            <a href="/" 
            className={`${activeButton === 'btn-7' ? 'active' : ''}`}
            onClick={() => handleClick('btn-7')}
            ><span><img src={Martial} alt="" /></span><span className='d-none d-md-block'>Martial Arts</span></a>
            <a href="/"
            className={`${activeButton === 'btn-8' ? 'active' : ''}`}
            onClick={() => handleClick('btn-8')}
            ><span><img src={Swimming} alt="" /></span><span className='d-none d-md-block'>Swimming</span></a>

          </li>
        </ul>
      </div>
     </div>
     <div className="container">
         <div className="d-none d-md-block">
         <div className="search-section position-relative search-key-input gap-md-3 gap-1 my-4 mx-auto d-flex align-items-center flex-wrap ">
          <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add your location"/>
          <div className="date-time-section d-flex fc fs-17 fw-500">
          <div className='protector'></div>
          <img className='mr-2' src={calender} alt="" />Any date
        </div>
        <div className="date-time-section d-flex fc fs-17 fw-500">
          <div className='protector ml-5'></div><img className='mr-2 fc ' src={clock} alt="" />Time</div>
               <button className="btn search-btn my-2 my-sm-0" type="submit"><img className='mr-2' src={search} alt="" />Search</button>
        </div>
         </div>
         <div className="d-block d-sm-block d-md-none">
         <div className="search-section position-relative search-key-input gap-md-3 gap-1 my-4 mx-auto d-flex align-items-center flex-wrap ">
          <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add your location"/>
        
        
               <button className="btn search-btn my-2 my-sm-0" type="submit"><img className='mr-2' src={search} alt="" />Search</button>
        </div>
      <div className="d-flex justify-content-around date-time-sm">
      <div className="date-time-section d-flex fc fs-17 fw-500">
          <img className='mr-2' src={calender} alt="" />Any date
        </div>
        <div className='protector'></div>

        <div className="date-time-section d-flex fc fs-17 fw-500">
          <img className='mr-2 fc ' src={clock} alt="" />Time</div>
      </div>
         </div>
        
     <p className='text-center'>Save money by splitting costs with others for group fitness and sports training</p>
     <h2 className='text-center my-5 fs-30 fw-700'>How splitMart works</h2>
     <div className="row">
      <div className="col-lg-6 coaching-b">
        <div className="coaching-center ">
         <h4 className='fs-24 fw-700'>Need training or coaching</h4>
         <div className="coaching-options d-flex">
          <div className="service-icon"><img src={search} alt="" /></div>
          <div className="flex-1">
            <div className='fs-22 fw-700'>Find</div>
            <div className='fs-18 fw-400'>Search to find what you need</div>
          </div>
         </div>
         <div className="coaching-options d-flex">
          <div className="service-icon"><img src={connect} alt="" /></div>
          <div className="flex-1">
            <div className='fs-22 fw-700'>Connect</div>
            <div className='fs-18 fw-400'>Schedule a session per your preference</div>
          </div>
         </div>
         <div className="coaching-options d-flex">
          <div className="service-icon"><img src={enjoy} alt="" /></div>
          <div className="flex-1">
            <div className='fs-22 fw-700'>Enjoy</div>
            <div className='fs-18 fw-400'>Make progress towards your desired goal</div>
          </div>
         </div>
         <div className='primary-btn w-100 fs-18 pointer'><img src={search} alt="" />Book</div>
        </div>
      </div>
      <div className="col-lg-6 ">
        <div className="coaching-center">
         <h4 className='fs-24 fw-700'>Need training or coaching</h4>
         <div className="coaching-options d-flex">
          <div className="service-icon"><img src={describe} alt="" /></div>
          <div className="flex-1">
            <div className='fs-22 fw-700'>Describe</div>
            <div className='fs-18 fw-400'>Provide overview and details</div>
          </div>
         </div>
         <div className="coaching-options d-flex">
          <div className="service-icon"><img src={check} alt="" /></div>
          <div className="flex-1">
            <div className='fs-22 fw-700'>Approve</div>
            <div className='fs-18 fw-400'>Review and approve booking requests</div>
          </div>
         </div>
         <div className="coaching-options d-flex">
          <div className="service-icon"><img src={earn} alt="" /></div>
          <div className="flex-1">
            <div className='fs-22 fw-700'>Earn</div>
            <div className='fs-18 fw-400'>Receive payment 24 hours after session ends</div>
          </div>
         </div>
         <div className='primary-btn w-100 fs-18 pointer'><img src={add} alt="" />List</div>
        </div>
      </div>
     </div>
     <h3 className='text-center my-5 fs-30 fw-700'>SplitMart for your fitness and sports training needs</h3>
             <div className="row">
              <div className="col-lg-4 mb-4 ">
                <div className="box-img">
                  <img src={box} alt="" />
                  <div className='list-text'>Pilates</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="box-img">
                  <img src={box1} alt="" />
                  <div className='list-text'>Dance</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="box-img">
                  <img src={box2} alt="" />
                  <div className='list-text'>Sports</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="box-img">
                  <img src={box3} alt="" />
                  <div className='list-text'>yoga</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="box-img">
                  <img src={box4} alt="" />
                  <div className='list-text'>Personal Training</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="box-img">
                  <img src={box5} alt="" />
                  <div className='list-text'>Weight training</div>
                </div>
              </div>
             </div>
     <h3 className='text-center my-5 fs-30 fw-700'>Split the costs, get on track, and get results</h3>
        <div className="row">
          <div className="col-lg-4 coaching-b">
          <div className="card br-20">
  <img src={card} className="card-img-top br-t" alt="..."/>
  <div className="card-body bg-c br-b">
    <h5 className="card-title fs-20 fw-700 fc1">Dance Class</h5>
    <p className="card-text fc2 fs-16 fw-500">4 Miles away</p>
    <div className="d-flex justify-content-between align-items-center">
    <a href="/" className="fc3 text-decoration-none fs-14 fw-500">Send message <img src={message} alt="" /></a>
    <div className=' d-flex align-items-center fs-14 fw-500 fc2'><span className='fs-20 fw-700'>$35</span >/hour</div>
    </div>
  </div>
</div>
          </div>
          <div className="col-lg-4 coaching-b">
          <div className="card br-20">
  <img src={card} className="card-img-top br-t" alt="..."/>
  <div className="card-body bg-c br-b">
    <h5 className="card-title fs-20 fw-700 fc1">Dance Class</h5>
    <p className="card-text fc2 fs-16 fw-500">4 Miles away</p>
    <div className="d-flex justify-content-between align-items-center">
    <a href="/" className="fc3 text-decoration-none fs-14 fw-500">Send message <img src={message} alt="" /></a>
    <div className=' d-flex align-items-center fs-14 fw-500 fc2'><span className='fs-20 fw-700'>$35</span >/hour</div>
    </div>
  </div>
</div>
          </div>
          <div className="col-lg-4 coaching-b ">
          <div className="card br-20">
  <img src={card} className="card-img-top br-t" alt="..."/>
  <div className="card-body bg-c br-b">
    <h5 className="card-title fs-20 fw-700 fc1">Dance Class</h5>
    <p className="card-text fc2 fs-16 fw-500">4 Miles away</p>
    <div className="d-flex justify-content-between align-items-center">
    <a href="/" className="fc3 text-decoration-none fs-14 fw-500">Send message <img src={message} alt="" /></a>
    <div className=' d-flex align-items-center fs-14 fw-500 fc2'><span className='fs-20 fw-700'>$35</span >/hour</div>
    </div>
  </div>
</div>
          </div>
        </div>
     <h3 className='text-center my-5 fs-30 fw-700'>What they say about SplitMart</h3>
     <div className="row mb-5">
      <div className="col-lg-4 coaching-b">
        <div className="review-card">
          <img src={comas} className='mb-4' alt="" />
          <p className='fs-18 fw-400 fc2'>It is so easy to join group or 1:1 sessions with SplitMart</p>
          <h4 className='fs-20 fw-600 fc1'>Chris</h4>
          <p className='fs-15 fw-600 fc3'>Customer</p>
        </div>
      </div>
      <div className="col-lg-4 coaching-b">
        <div className="review-card">
          <img src={comas} className='mb-4' alt="" />
          <p className='fs-18 fw-400 fc2'>It is so easy to join group or 1:1 sessions with SplitMart</p>
          <h4 className='fs-20 fw-600 fc1'>Chris</h4>
          <p className='fs-15 fw-600 fc3'>Customer</p>
        </div>
      </div>
      <div className="col-lg-4 coaching-b">
        <div className="review-card">
          <img src={comas} className='mb-4' alt="" />
          <p className='fs-18 fw-400 fc2'>It is so easy to join group or 1:1 sessions with SplitMart</p>
          <h4 className='fs-20 fw-600 fc1'>Chris</h4>
          <p className='fs-15 fw-600 fc3'>Customer</p>
        </div>
      </div>
     </div>
     </div>
</main>
<footer className='bt'>
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
</footer>
 </>
  );
}

export default App;
