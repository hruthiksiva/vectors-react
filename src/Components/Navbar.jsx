import React from 'react';
import logoimg from '../assets/img/logorem.png'
const Navbar = () => {
  return (
    <>
    {/* <div className="container-fluid px-5 py-2 shadow-sm bg-light ">
      <div className="row px-5">
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
        <a className="navbar-brand" href="#">
          <img alt="" style={{ height: '40px' }} />Vectors
        </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item px-md-3">
                <a className=""  href="/">Home</a>
              </li>
              <li className="nav-item px-md-3">
                <a className=""  href="/services">Services</a>
              </li>
              <li className="nav-item px-md-3">
                <a className=""  href="portfolio">Portfolio</a>
              </li>
              <li className="nav-item px-md-3">
                <a className=""  href="about">About</a>
              </li>
              <li className="nav-item text-end px-md-3">
                <a className=""  href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <hr className='m-0 ' style={{opacity:'10%'}}/> */}




    <div className='container-fluid'>
      <div className="row py-4">
        <div className="col-2 fs-4 d-flex justify-content-center my-auto">
        <a className="text-black" style={{textDecoration:'none'}}href="/">
          <img className=''src={logoimg} alt="" style={{ height: '40px' }} />Vectors
        </a>
        </div>
        <div className=" col-8 d-flex justify-content-center my-auto">
          <a className=" navbar-hover mx-4" style={{textDecoration:'none'}} href="/">Home</a>   
          <a className=" navbar-hover mx-4" style={{textDecoration:'none'}} href="/services">Services</a>
          <a className=" navbar-hover mx-4" style={{textDecoration:'none'}} href="portfolio">Portfolio</a>
          <a className=" navbar-hover mx-4" style={{textDecoration:'none'}} href="about">About</a>    
        </div>
        <div className="col-2 justify-content-center my-auto  ">
            <a className="nav-contact mx-4 px-3 py-2 rounded-4"  href="contact">Contact > </a>  
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
