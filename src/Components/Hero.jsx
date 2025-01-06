import React from 'react';
import heroimg from '../../src/assets/img/hero.png';

const Hero = () => {
  return (
    <>
      <div className="container-fluid w-100 base" style={{ minHeight: '500px' }}>
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
          <div className="col text-end hideOnMobile">
            <img className="" src={heroimg} style={{maxHeight:'500px'}} alt="Hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
