import React from 'react';
import heroimg from '../../src/assets/img/hero.png';

const Hero = () => {
  return (
    <>
      <div className="herobg position-relative" style={{minHeight:'610px'}}>
      <div className="container-fluid w-100">
        <div className="row w-100 d-flex justify-content-center align-items-center px-5 py-5 py-md-0">
          <div className="col-md-7 col-12">
            <h1 className="text-center heroHead text-md-start mb-5 mb-lg-0">
              Empowering Businesses to Thrive in the Digital Era
            </h1>
            <p className="text-center text-md-start heroPara mb-4 mb-lg-3">
            Transform your offline business into a powerful online force with our expert web development, innovative UI/UX design, and strategic marketing solutions, tailored for exponential growth.
            </p>
            <div className="center" style={{}}>
              <button className="logobg text-fluid "><a href='/contact' className=' text-black text-decoration-none'>Contact Us</a></button>
            </div>
          </div>
          <div className="col text-end hideOnMobile py-4">
            <img className="" src={heroimg} style={{maxHeight:'500px'}} alt="Hero" />
          </div>
        </div>
      </div>
      <div className="col-12 ">
          <svg className=" position-absolute bottom-0 " viewBox="0 0 1441 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 1163.18 0 C 1321.14 0.3606 1441 37.4609 1441 37.4609 V 110 H 0 V 64 C 0 64 98.1133 111.005 370.92 101.368 C 509.977 96.4553 614.314 74.8108 720.361 52.8115 C 845.588 26.8334 973.201 0 1163.18 0 Z" fill="#f0eff2"></path>
          </svg>
         </div>
      </div>
    </>
  );
};

export default Hero;
